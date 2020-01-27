import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  pageTitle1 = 'welcome to moviesubtitles.com';
  pageTitle2 = 'Download english subtitles of your favourite movies here';
  constructor(private router: Router) {}
}


