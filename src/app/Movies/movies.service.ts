import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesPopStuff } from './moviesInterface';
@Injectable({
    providedIn: 'root'
})

export class MovieService{
    constructor(private http: HttpClient){}

    moviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=c11fd57ad4297fc53a2e40a2080ecbf7&language=en-US&page=1";
    getMovies() : Observable<MoviesPopStuff[]>{
        return this.http.get<MoviesPopStuff[]>(JSON.parse(this.moviesUrl));
    }
}