import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-list-view',
  templateUrl: 'app/list-view.component.html',
  styleUrls: ['app/list-view.component.css']
})
export class ListViewComponent implements OnInit {
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