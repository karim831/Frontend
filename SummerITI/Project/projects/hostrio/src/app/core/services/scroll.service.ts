import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionId:string  = '';
  constructor(
    private router:Router,
    private ngZone:NgZone,
    @Inject(DOCUMENT) private docment:Document
  ){
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.scrolling();
    })
  }
  scrollTo(sectionId:string,url:string){
    this.router.navigate([url],{fragment: sectionId});
    this.sectionId = sectionId;
    if(this.router.url === url)
      this.scrolling();
    else
      this.router.navigateByUrl(url);
  }

  private scrolling(){
    if(this.sectionId){
      requestAnimationFrame(() => {
        let e = document.getElementById(this.sectionId);
        e?.scrollIntoView({
          behavior:'smooth'
        });
      })
    }
  }
}
