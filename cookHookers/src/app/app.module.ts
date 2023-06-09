import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { PreMobileComponent } from './pre-mobile/pre-mobile.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListOfRecipesComponent,
    RecipeDetailComponent,
    PreMobileComponent,
    HomeMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
