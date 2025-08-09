import { Component, OnInit } from '@angular/core';
import { PricingPlanService } from '../../../core/services/pricing-plan.service';
import { PricingPlan } from '../../../core/models/pricing-plan';

@Component({
  selector: 'app-pricing-plan',
  standalone: false,
  templateUrl: './pricing-plan.component.html',
  styleUrl: './pricing-plan.component.css'
})
export class PricingPlanComponent implements OnInit{
  title:string = "Pricing Plans";
  plans:PricingPlan[] = [];
  constructor(private pricingPlanService:PricingPlanService){}  

  ngOnInit(){
    this.pricingPlanService.getPricingPlans().subscribe({
      next: (plans) => {
        for(let plan of plans){
          this.plans.push({
            type: plan.type,
            img: plan.img,
            price: plan.price,
            period: plan.period,
            infos: plan.infos
          });
        }
      },
      error: (error) => {
        console.log(`SomeThing Wrong Happened => ${error}` );
      }
    })
  }
}
