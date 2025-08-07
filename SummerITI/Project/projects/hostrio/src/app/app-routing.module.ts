import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'subscription', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
