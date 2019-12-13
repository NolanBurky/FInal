import { TvPopStuff } from './tvInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class TvService{
    constructor(private http: HttpClient){}

    showsUrl = "https://api.themoviedb.org/3/tv/popular?api_key=c11fd57ad4297fc53a2e40a2080ecbf7&language=en-US&page=1";
    getShows() : Observable<TvPopStuff[]>{
        return this.http.get<TvPopStuff[]>(JSON.parse(this.showsUrl));
    }
}