import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private products:IProduct[] = [];
  constructor() { 
    this.products = [
      {
        id: 0,
        name: "Lenovo",
        price: 10000,
        quantity: 3,
        imgUrl: "images/labtop.png",
        catId: 1
      },
      {
        id: 1,
        name: "Dell",
        price: 20000,
        quantity: 2,
        imgUrl: "images/labtop.png",
        catId: 1
      },
      {
        id: 2,
        name: "ChairGaming",
        price: 1000,
        quantity: 1,
        imgUrl: "images/labtop.png",
        catId: 2
      },
      {
        id: 3,
        name: "Oppo",
        price: 5000,
        quantity: 5,
        imgUrl: "images/labtop.png",
        catId: 3
      },
      {
        id: 4,
        name: "Sumsung",
        price: 7000,
        quantity: 3,
        imgUrl: "images/labtop.png",
        catId: 3
      },
      {
        id: 5,
        name: "Hp",
        price: 20000,
        quantity: 1,
        imgUrl: "images/labtop.png",
        catId: 1
      }
    ];
  }

  getAllProducts = () => this.products;

  getProductById = (id: number) => this.products.find((product) => product.id === id) || null; 

  filterProductsWithCatId(catId: number): IProduct[]{
    if(catId === 0)
        return this.getAllProducts();
    else
        return this.products.filter((product) => product.catId === catId);
  }
}
