import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricingPlan } from '../models/pricing-plan';

@Injectable({
  providedIn: 'root'
})
export class PricingPlanService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) {}


  getPricingPlans():Observable<PricingPlan[]>{
    return this.http.get<PricingPlan[]>(`${this.baseUrl}/pricing-plans`);
  }
}
