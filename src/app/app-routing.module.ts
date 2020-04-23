import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path:'articles', component:ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
