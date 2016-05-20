import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
	selector: 'edit-movie-detail',
	templateUrl: 'app/edit-movie-detail.component.html',
	styleUrls: ['app/edit-movie-detail.component.css']
})
export class EditMovieDetailComponent implements OnInit {
	movie: Movie;
	
	audiences = ['PG','PG13','NC16','M18','R21'];
	languages = ['English', 'Hindi', 'Mandarin', 'Tamil', 'Korean'];
	userratings = ['1', '2', '3', '4', '5'];
	submitted = false;

	constructor(
		private router: Router,
		private movieService: MovieService,
		private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.movieService.getMovie(id)
			.then(movie => this.movie = movie);
	}

	onSubmit() {
		this.submitted = true;
		let link = ['MovieDetail', { id: this.movie.id }];
	  	this.router.navigate(link);
	}
}