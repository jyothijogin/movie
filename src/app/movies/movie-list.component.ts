import {Component, OnInit} from '@angular/core';
import {IMovieDetail} from './moviedetail';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movie-list.component.html'
})

export class MovieListComponent implements OnInit {
  filterText: string;
  movies: IMovieDetail[];
  filteredMovies: IMovieDetail[];
  pageTitle1 = 'welcome to moviesubtitles.com';
  pageTitle2 = 'Download english subtitles of your favourite movies here';

  constructor(private movieService: MovieService) {
  }
  ngOnInit(): void {
    this.movies = this.movieService.movies;
    this.filteredMovies = this.movies;
    console.log('In OnInit');
  }
  performFilter(): void {
    if (this.filterText) {
      this.filteredMovies = this.movies.filter(m => m.title.toLowerCase().includes(this.filterText.toLowerCase()));
    } else {
      this.filteredMovies = this.movies;
    }
}
}
