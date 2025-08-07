import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch:"full"},
    {path: "home", component: HomeComponent, title: "Home"},
    {path: "orders", component: OrderComponent, title: "Products"},
    {path: "about", component: AboutComponent, children:[
            {path: "",redirectTo:"/about/vision",pathMatch:"full"},
            {
                path: 'vision',
                component: VisionComponent,
                title: "Vision"
            },
            {
                path: 'value',
                component: ValuesComponent,
                title: "Value"
            }
        ]
    },
    {path: "details/:id", component:DetailsComponent, title:"Details"},
    {path: "**", component: NotFoundComponent, title:"Not Found"}
];
