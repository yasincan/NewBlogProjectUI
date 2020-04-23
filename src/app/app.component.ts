import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article/article.service';
import { Article } from './Model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'New Blog Project UI';
  articleList: Article[];


  constructor(private articleService: ArticleService){}

  ngOnInit()
  {
     this.articleService.GetAllArticles().subscribe(response =>
      {
        console.log(response[1].Text)
      });
      

  }
}
