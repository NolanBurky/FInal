import { MovieService } from './movies.service';
import { MoviesPopStuff } from './moviesInterface';
import { Component } from '@angular/core';


@Component ({
    selector: 'MovTv',
    templateUrl: './movies.componenet.html'
})
export class MoviesPopComponent{
 pageTitle: string = 'The Latest Movies';
 movies: MoviesPopStuff[] = [];
 constructor(private movieService: MovieService)
    {
     //this.shows = tvService.getShows();
     this.movieService.getMovies().subscribe(MovObs => {
        this.movies = MovObs;
     });
    }
}