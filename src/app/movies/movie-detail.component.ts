import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMovieDetail} from './moviedetail';
import {MovieListComponent} from './movie-list.component';
import {text} from '@angular/core/src/render3/instructions';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  idnum: number;
  movies: IMovieDetail[];
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movies = movieService.movies;
  }
  downloadFile(id: number) {
      switch (id) {
        case 1:
          const link1 = document.createElement('a');
          link1.href = 'https://www.yifysubtitles.com/subtitle/warfortheplanetoftheapes2017720pblurayx264-ytsag-english-115489.zip';
          link1.click();
          break;
        case 2:
          const link2 = document.createElement('a');
          link2.href = 'https://www.yifysubtitles.com/subtitle/beautyandthebeast2017720pblurayx264ytsag-english-109329.zip';
          link2.click();
          break;
        case 3:
          const link3 = document.createElement('a');
          link3.href = 'https://www.yifysubtitles.com/subtitle/coco2017720pblurayx264-ytsag-english-120804.zip';
          link3.click();
          break;
        case 4:
          const link4 = document.createElement('a');
          link4.href = 'https://www.yifysubtitles.com/subtitle/theshapeofwater2017web-dlx264-fgt-english-122085.zip';
          link4.click();
          break;
        case 5:
          const link5 = document.createElement('a');
          link5.href = 'https://www.yifysubtitles.com/subtitle/wonderwoman2017720pblurayx264ytsag-english-113942.zip';
          link5.click();
          break;
        case 6:
          const link6 = document.createElement('a');
          link6.href = 'https://www.yifysubtitles.com/subtitle/incredibles22018720pblurayx264ytsag-english-135838.zip';
          link6.click();
          break;
        case 7:
          const link7 = document.createElement('a');
          link7.href = 'https://www.yifysubtitles.com/subtitle/guardians-of-the-galaxy-vol-2-2017-1080p-ytsag-english-112964.zip';
          link7.click();
          break;
        case 8:
          const link8 = document.createElement('a');
          link8.href = 'https://www.yifysubtitles.com/subtitle/astarisborn2018web-dlx264-fgt-english-140083.zip';
          link8.click();
          break;
        case 9:
          const link9 = document.createElement('a');
          link9.href = 'http://www.yifysubtitles.com/subtitle/ladybird2017720pblurayx264ytsag-english-121137.zip';
          link9.click();
          break;
        case 10:
          const link10 = document.createElement('a');
          link10.href = 'https://www.yifysubtitles.com/subtitle/eighthgrade2018720pblurayx264ytsag-english-134589.zip';
          link10.click();
          break;
        case 11:
          const link11 = document.createElement('a');
          link11.href = 'https://www.yifysubtitles.com/subtitle/blackpanther2018720pblurayx264-ytsam-english-125845.zip';
          link11.click();
          break;
        case 12:
          const link12 = document.createElement('a');
          link12.href = 'http://www.yifysubtitles.com/subtitle/logan2017720pblurayx264-ytsag-english-109449.zip';
          link12.click();
          break;
      }
  }

  ngOnInit() {
    const urlid = (this.route.snapshot.params['id']);
    this.idnum = urlid;
  }
}
