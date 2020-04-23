import { Component, OnInit, NgModule } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../Model/article';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbPaginationModule, NgbAlertModule,],
})

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articleList: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
      this.articleService.GetAllArticles().subscribe(response =>{
        this.articleList = response;
      });
  }

}
