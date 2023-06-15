import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { PageTitleService } from './service/page-title.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: 'menu', component: HeaderComponent},
  {path: 'detail', component: RecipeDetailComponent},
  {path: 'allRecipes', component: ListOfRecipesComponent, data: { pageTitle: 'Toutes les recettes' }},
  {path: 'allRecipes/entrees', component: ListOfRecipesComponent, data: { categories: 'Starter', pageTitle: 'Entrées' } },
  {path: 'allRecipes/sides', component: ListOfRecipesComponent, data: { categories: 'mainCourse', pageTitle: 'Accompagnements' } },
  {path: 'allRecipes/desserts', component: ListOfRecipesComponent, data: { categories: 'Dessert', pageTitle: 'Desserts' } },
  {path: 'allRecipes/autres', component: ListOfRecipesComponent, data: { categories: 'Miscellaneous', pageTitle: 'Autres recettes' } },
  {path: 'search', component: AdvancedSearchComponent },
  // {path: 'allrecipes/:cat', component: ListOfRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private pageTitleService: PageTitleService) {
    // Réinitialiser le titre de la page lorsque la route change
    this.pageTitleService.resetPageTitle();
  }
 }
