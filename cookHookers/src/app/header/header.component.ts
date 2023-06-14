import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../service/page-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  pageTitle!: string;
  isUserLoggedIn: boolean = false;

  constructor(private route: ActivatedRoute, private pageTitleService: PageTitleService){}

  ngOnInit(): void {
  }

  getPageTitle(): string {
    return this.pageTitleService.getPageTitle();
  }

}
