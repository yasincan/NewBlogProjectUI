import { ModelBase } from './model-base';
import { Picture } from './picture';
import { Category } from './category';

export class Article extends ModelBase {
    Category: Category;
    Picture: Picture;
    Title: string;
    Text: string;
    Description: string;
    IsActive: boolean;
    CategoryId: string;
   
  
}
