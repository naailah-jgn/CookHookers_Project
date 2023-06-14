import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterComponent } from './enter/enter.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    EnterComponent,
    HomeComponent,
    HeaderComponent,
    ListOfRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
