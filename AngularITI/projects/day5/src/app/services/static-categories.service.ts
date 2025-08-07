import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticCategoriesService {
  private categories:ICategory[];
  constructor() {
    this.categories = [
      {id:1,name:"Labtops"},
      {id:3,name:"Phones"},
      {id:2,name:"Accessories"},
    ];
   }

   getAllCategories = () => this.categories;
}
