import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hostrio';
  active = false;

  @HostListener("window:scroll")
  onScroll(){
    this.active = window.scrollY >= window.innerHeight;      
  }

  onClick(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
}
