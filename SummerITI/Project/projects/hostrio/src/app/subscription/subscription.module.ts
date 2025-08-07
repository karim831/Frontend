import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { StatsComponent } from './components/stats/stats.component';
import { DiscountComponent } from './components/discount/discount.component';



@NgModule({
  declarations: [
    SubscriptionComponent,
    PricingPlanComponent,
    TestimonialsComponent,
    TeamMembersComponent,
    ServicesComponent,
    SkillsComponent,
    HowItWorksComponent,
    StatsComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubscriptionModule { }
