import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../service/page-title.service';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.scss']
})
export class ListOfRecipesComponent implements OnInit {
  category!: string;

  constructor(private route: ActivatedRoute, private pageTitleService: PageTitleService) {}
  
  ngOnInit(): void {
    this.category = this.route.snapshot.data['category'];
    // Effectuer le filtrage des recettes en fonction de la catégorie //

    const pageTitle = this.route.snapshot.data['pageTitle'];
    this.pageTitleService.setPageTitle(pageTitle);
  }

}
