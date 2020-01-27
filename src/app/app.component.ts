import {Component, Inject, OnInit} from '@angular/core';
import {templateSourceUrl} from '@angular/compiler';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.navigateByUrl('movie-list');
  }
}
