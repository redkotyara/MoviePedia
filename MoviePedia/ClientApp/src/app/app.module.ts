import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MatOptionModule } from "@angular/material/core";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AddMovieComponent} from "./add-movie/add-movie.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movie/:id', component: MovieDetailsComponent },
      { path: 'addmovie', component: AddMovieComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
