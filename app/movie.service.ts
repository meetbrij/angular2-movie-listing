import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
	getMovies() {
		return Promise.resolve(MOVIES);
	}

	getMovie(id: number) {
	  return Promise.resolve(MOVIES).then(
	    movies => movies.filter(movie => movie.id === id)[0]
	  );
	}
}