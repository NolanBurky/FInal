import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvPopComponent } from './Tv/tv.componenet';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { MoviesPopComponent } from './Movies/movies.componenet';


@NgModule({
  declarations: [
    AppComponent,
    TvPopComponent,
    HomeComponent,
    MoviesPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'shows', component: TvPopComponent},
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviesPopComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
