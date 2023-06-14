import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'cookHookers';
  selectedCategory: string | undefined;
  recipes: any[] = [];

}
