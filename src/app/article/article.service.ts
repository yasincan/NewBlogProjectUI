import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Article } from '../Model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }
  GetAllArticles(): Observable<Article[]> {
       return this.httpClient.get<Article[]>(this.url+ "api/Article/ListArticles?page=1");
  }
}
