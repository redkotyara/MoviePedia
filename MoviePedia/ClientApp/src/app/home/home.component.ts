import {Component, OnInit} from '@angular/core';
import {GenresService} from "../services/genres.service";
import {MoviesService} from "../services/movies.service";
import {Movie} from "../interfaces/Movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  //genres!: Observable<Genre[]>;
  movies!: Movie[];

  constructor(private genreService: GenresService,
              private moviesService: MoviesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.GetMovies().subscribe(data => this.movies = data);
  }

  redirectToMovieDetails(id: number) {
    this.router.navigate([`/movie/${id}`]);
  }

  addTestMovie(): void {
    this.moviesService.AddMovie({
      genreId: 1,
      name: 'Tsert',
      rating: 1,
      id: 0,
      pictureUrl: ''
    }).subscribe(data => this.movies.push(data));
  }

  trackBy(index: any, item: any){
    return item.id;
  }
}
