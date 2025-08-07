import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionId:string  = '';

  constructor(private router:Router){
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.scrolling();
    })
  }
  scrollTo(sectionId:string,url:string){
    this.sectionId = sectionId;
    if(this.router.url === url)
      this.scrolling();
    else
      this.router.navigateByUrl(url);

  }
  
  private scrolling(){
    if(this.sectionId){
      let e = document.getElementById(this.sectionId);
      e?.scrollIntoView({
        behavior:'smooth'
      });
    }
  }
}
