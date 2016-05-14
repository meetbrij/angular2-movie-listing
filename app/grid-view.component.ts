import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-grid-view',
  templateUrl: 'app/grid-view.component.html',
  styleUrls: ['app/grid-view.component.css']
})
export class GridViewComponent implements OnInit {
	movies: Movie[] = [];
	
	constructor(
		private router: Router,
		private movieService: MovieService
	) { }
	
	ngOnInit() {
    	this.movieService.getMovies()
      		.then(movies => this.movies = movies);
  	}
  	
  	gotoDetail(movie: Movie) {
	  let link = ['MovieDetail', { id: movie.id }];
	  this.router.navigate(link);
	}
}