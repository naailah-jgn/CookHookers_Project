import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { PageTitleService } from './service/page-title.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
   { path: '', component: EnterComponent },
  {path: 'menu', component: HeaderComponent},
  {path: 'detail', component: RecipeDetailComponent},
  { path: 'home', component: HomeComponent },
  {path: 'allRecipes', component: ListOfRecipesComponent, data: { pageTitle: 'Page de toutes les recettes' }},
  {path: 'allRecipes/entrees', component: ListOfRecipesComponent, data: { categories: 'entrees', pageTitle: 'Page de toutes les entrées' } },
  {path: 'allRecipes/sides', component: ListOfRecipesComponent, data: { categories: 'sides', pageTitle: 'Page de tous les accompagnements' } },
  {path: 'allRecipes/desserts', component: ListOfRecipesComponent, data: { categories: 'desserts', pageTitle: 'Page de tous les desserts' } },
  {path: 'allRecipes/autres', component: ListOfRecipesComponent, data: { categories: 'autres', pageTitle: 'Page de tous les autres recettes' } }

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
