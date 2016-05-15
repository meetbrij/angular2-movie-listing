import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
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
		private movieService: MovieService,
		private routeParams: RouteParams
	) { }
	
	ngOnInit() {
		let selectedLanguage = this.routeParams.get('language');
		let selectedAudience = this.routeParams.get('audience');
		let selectedRating = this.routeParams.get('rating');
		if(selectedLanguage) {
			this.movieService.getMoviesByLanguage(selectedLanguage)
      		.then(movies => this.movies = movies);
		} else if(selectedAudience) {
			this.movieService.getMoviesByAudience(selectedAudience)
      		.then(movies => this.movies = movies);
		} else if(selectedRating) {
			this.movieService.getMoviesByRating(selectedRating)
      		.then(movies => this.movies = movies);
		} else {
			this.movieService.getMovies()
      			.then(movies => this.movies = movies);
		}
    	
  	}
  	
  	gotoDetail(movie: Movie) {
	  let link = ['MovieDetail', { id: movie.id }];
	  this.router.navigate(link);
	}
}