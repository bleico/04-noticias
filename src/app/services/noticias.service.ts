import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {

    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines() {
    // tslint:disable-next-line: max-line-length
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=be521cafdfd24a858a332b27d08fad0c`);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }

  getTopHeadlinesCategoria(categoria: string) {
    // tslint:disable-next-line: comment-format
    // https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=be521cafdfd24a858a332b27d08fad0c
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);
  }
}
