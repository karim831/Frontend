import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { StaticProductsService } from '../../services/static-products.service';
import { CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit{
  selectedId!: number;

  product!:IProduct | null;
  constructor(
    private _route:ActivatedRoute,
    private _staticProductService:StaticProductsService,
  ){}

  ngOnInit(){
    this.selectedId = Number(this._route.snapshot.paramMap.get("id"));
    this.product = this._staticProductService.getProductById(this.selectedId);
  }
}
