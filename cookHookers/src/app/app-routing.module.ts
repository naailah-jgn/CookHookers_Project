import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { PageTitleService } from './service/page-title.service';

const routes: Routes = [
  {path: 'menu', component: HeaderComponent},
  {path: 'allRecipes', component: ListOfRecipesComponent, data: { pageTitle: 'Toutes les recettes' }},
  {path: 'allRecipes/entrees', component: ListOfRecipesComponent, data: { categories: 'entrees', pageTitle: 'entrées' } },
  {path: 'allRecipes/sides', component: ListOfRecipesComponent, data: { categories: 'sides', pageTitle: 'Accompagnements' } },
  {path: 'allRecipes/desserts', component: ListOfRecipesComponent, data: { categories: 'desserts', pageTitle: 'Desserts' } },
  {path: 'allRecipes/autres', component: ListOfRecipesComponent, data: { categories: 'autres', pageTitle: 'Autres recettes' } },
  {path: 'search', component: AdvancedSearchComponent }
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
