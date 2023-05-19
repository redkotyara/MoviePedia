import {Component, Input, OnInit} from '@angular/core';
import {GenresService} from "../services/genres.service";
import {MoviesService} from "../services/movies.service";
import {Movie} from "../interfaces/Movie";
import {Observable, switchMap} from "rxjs";
import {MovieDetail} from "../interfaces/movie-detail";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {

  movieId!: number;
  movie!: Observable<MovieDetail>;

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.movieId = params['id']);
    this.movie = this.moviesService.GetMovie(this.movieId);
  }

  deleteMovie(): void {
    this.moviesService.DeleteMovie(this.movieId).subscribe();
    this.router.navigate(['/'])
  }
}
