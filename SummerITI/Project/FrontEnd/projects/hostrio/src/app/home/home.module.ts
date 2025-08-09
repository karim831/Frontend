import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturesComponent } from './components/features/features.component';
import { LandingComponent } from './components/landing/landing.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArticlesComponent,
    GalleryComponent,
    FeaturesComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
