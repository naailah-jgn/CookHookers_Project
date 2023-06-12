import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
categories: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
   this.homeService.getCategories().subscribe((data: any) => {
    this.categories = data.categories;

    // Filtrer les catégories de petit-déjeuner, d'accompagnement et de dessert
    const breakfastCategory = this.categories.find((category: any) => category.strCategory === 'Breakfast');
    const sideCategory = this.categories.find((category: any) => category.strCategory === 'Side');
    const dessertCategory = this.categories.find((category: any) => category.strCategory === 'Dessert');
  // Remplir le tableau de catégories avec les catégories filtrées
    this.categories = [breakfastCategory, sideCategory, dessertCategory]
   });
}
}
