import { Component } from '@angular/core';
import { lang } from 'src/lang';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent {
  title = 'cookHookers';
  lang = lang;
  selectedCategory: string | undefined;
  recipes: any[] = [];


  showRecipes(category: string) {

    if (category === 'Entree') {
      this.recipes = ['Recette 1', 'Recette 2', 'Recette 3', 'Recette 4'];
    } else if (category === 'Side') {
      this.recipes = ['Recette 5', 'Recette 6', 'Recette 7', 'Recette 8'];
    } else if (category === 'Dessert') {
      this.recipes = ['Recette 9', 'Recette 10', 'Recette 11', 'Recette 12'];
    } else if (category === 'Autres') {
      this.recipes = ['Recette 13', 'Recette 14', 'Recette 15', 'Recette 16'];
    }

    this.selectedCategory = category;
  }
}
