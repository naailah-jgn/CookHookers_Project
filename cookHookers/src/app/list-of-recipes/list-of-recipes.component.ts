import { ApiService } from './../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../service/page-title.service';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.scss']
})
export class ListOfRecipesComponent implements OnInit {
  @Output() meal : any = {};
  category!: string;
  meals: any[] = [];
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  form = this.fb.group({
    search: ['', Validators.required]
  })

  constructor(private route: ActivatedRoute, private pageTitleService: PageTitleService, private apiService: ApiService, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.category = this.route.snapshot.data['category'];
    // Effectuer le filtrage des recettes en fonction de la catégorie //

    const pageTitle = this.route.snapshot.data['pageTitle'];
    this.pageTitleService.setPageTitle(pageTitle);
    this.apiService.getMealsByFirstLetter('b').subscribe(
      (res : any )=> this.meals = res.meals
    );
  }

  /**
   * This function retrieves meals from an API based on the first letter of their name.
   * @param {string} letter - a string representing the first letter of the meals to be retrieved from
   * an API. The function uses the API service to get meals whose names start with the specified letter
   * and assigns the result to the "meals" property.
   */
  showRecipeByLetter(letter : string){
    this.apiService.getMealsByFirstLetter(letter).subscribe(
      (res : any )=> this.meals = res.meals
    )
  }

  onSearch() {
    let meals: any[] = [];
    let value: string = this.form.controls.search.value || '';
    this.apiService.getMealsByCategories(value).subscribe(
      (result: any) => {
        if (result)
          if (result.meals)
            for (let element of result.meals) {
              meals.push(element);
            }
        this.apiService.getMealsByIngredients(value).subscribe(
          (result: any) => {
            if (result)
              if (result.meals)
                for (let element of result.meals) {
                  meals.push(element);
                }

            this.apiService.getMealByName(value).subscribe(
              (result: any) => {
                if (result)
                  if (result.meals)
                    for (let element of result.meals) {
                      meals.push(element);
                    }
                console.log(meals);
              }

            )
          }
        )
      }
    )
  }



}
