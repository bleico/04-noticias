import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }


  getTopHeadlines() {
    return this.http.get( `https://newsapi.org/v2/top-headlines?country=us&apiKey=be521cafdfd24a858a332b27d08fad0c
    ` );
  }
}
