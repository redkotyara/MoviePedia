import {Component, OnInit} from '@angular/core';
import {GenresService} from "../services/genres.service";
import {MoviesService} from "../services/movies.service";
import {Genre} from "../interfaces/genre";
import {Router} from "@angular/router";

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent implements OnInit {
  constructor(private genreService: GenresService,
              private movieService: MoviesService,
              private router: Router) {
  }

  genres!: Genre[];
  enteredRating: number | null = null;
  enteredPictureUrl: string | null = null;
  selectedGenre: string | null = null;
  enteredMovieName: string | null = null;

  ngOnInit() {
    this.genreService.GetGenres().subscribe(x => this.genres = x);
  }

  addMovie(){
    const newMovie = {
      genreId: +this.selectedGenre!,
      name: this.enteredMovieName!,
      rating: this.enteredRating!,
      pictureUrl: this.enteredPictureUrl! ?? '',
      id: -1
    };
    this.movieService.AddMovie(newMovie).subscribe();
    this.router.navigate(['']);
  }
}
