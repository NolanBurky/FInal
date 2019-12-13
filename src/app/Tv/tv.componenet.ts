import { Component } from '@angular/core';
import { TvPopStuff } from './tvInterface';
import { TvService } from './tv.service';


@Component ({
    selector: 'popTv',
    templateUrl: './tv.component.html'
})
export class TvPopComponent{
 pageTitle: string = 'Most Popular TV Shows!';
 shows: TvPopStuff[] = [];
 constructor(private tvService: TvService)
 {
     //this.shows = tvService.getShows();
     this.tvService.getShows().subscribe(tvObs => {
        this.shows = tvObs;
     })
 }
}