import { ApiService } from './../service/api.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../service/page-title.service';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.scss']
})
export class ListOfRecipesComponent implements OnInit {
  category!: string;
  meals: any[] = [];
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  mainCategories = ['Beef', 'Chicken', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Vegan', 'Vegetarian', 'Goat', 'Breakfast'];
  
  constructor(private route: ActivatedRoute, private pageTitleService: PageTitleService, private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.category = this.route.snapshot.data['categories'];
      console.log(this.category);
      if (this.category){
        if (this.category === 'mainCourse'){
          this.meals = [];
          for (let cat of this.mainCategories){
            this.apiService.getMealsByCategory(cat).subscribe(
              (reslt: any) => {
                for (let meal of reslt.meals){
                this.meals.push(meal);  //je prends element par element et je push (ajoute dans meals) //
              }
            }
            );
          }
        }else{
          this.apiService.getMealsByCategory(this.category).subscribe(
            (reslt: any) => {
              this.meals = reslt.meals;
            }
          );
        }
      }else{
        this.apiService.getMealsByFirstLetter('b').subscribe(
          (res : any )=> this.meals = res.meals
        );
      }
    // Effectuer le filtrage des recettes en fonction de la catégorie //
    
    const pageTitle = this.route.snapshot.data['pageTitle'];
    this.pageTitleService.setPageTitle(pageTitle);

    // ngOnInit s'exécute dès le début sur le navigateur //
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

  showCatMeals(event: any) {
    if (event === 'mainCourse'){
      this.meals = [];
      for (let cat of this.mainCategories){
        this.apiService.getMealsByCategory(cat).subscribe(
          (reslt: any) => {
            for (let meal of reslt.meals){
            this.meals.push(meal);  //je prends element par element et je push (ajoute dans meals) //
          }
        }
        );
      }
    }else{
      this.apiService.getMealsByCategory(event).subscribe(
        (reslt: any) => {
          this.meals = reslt.meals;
        }
      );
    }
  }
  
}
