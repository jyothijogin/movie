import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieListComponent} from './movies/movie-list.component';
import {MovieDetailComponent} from './movies/movie-detail.component';

const routes: Routes = [
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie-list/:id', component: MovieDetailComponent},
  // {path: '', redirectTo: 'movie-list', pathMatch: 'full'},
  // {path: '**', redirectTo: 'movie-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
