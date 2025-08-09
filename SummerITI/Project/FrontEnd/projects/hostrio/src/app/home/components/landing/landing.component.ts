import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(@Inject(DOCUMENT) document:Document){}
  goArticle(){
    document.getElementById('articles')?.scrollIntoView({behavior:'smooth'});
  }
}
