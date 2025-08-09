import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discount } from '../models/discount';

@Injectable({
  providedIn: 'root'
})
export class GetDiscountService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) {}

  postDiscount(discount:Discount):Observable<Discount>{
    return this.http.post<Discount>(`${this.baseUrl}/discounts`,discount);
  }
}
