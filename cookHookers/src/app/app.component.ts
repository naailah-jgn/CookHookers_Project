import { Component } from '@angular/core';
import { lang } from 'src/lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookHookers';
  lang = lang;
}