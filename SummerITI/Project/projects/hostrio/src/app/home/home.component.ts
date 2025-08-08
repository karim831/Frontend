import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document:Document
  ){}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if(fragment){
        this.document.getElementById(fragment)?.scrollIntoView({behavior:'smooth'});
      }
    })   
  }
}
