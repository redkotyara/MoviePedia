import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interfaces/Movie";
import {MovieDetail} from "../interfaces/movie-detail";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }

  public GetMovie(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`/movies/${id}`);
  }

  public AddMovie(data: Movie) : Observable<Movie> {
    return this.http.post<Movie>('/movies', data);
  }

  public DeleteMovie(id: number): Observable<any> {
    return this.http.delete(`/movies/${id}`);
  }
}
