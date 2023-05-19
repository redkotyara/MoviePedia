import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../interfaces/genre";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  public GetGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>('/genres');
  }
}
