import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appScrollTo]',
  standalone: false
})
export class ScrollToDirective {
  @Input() appScrollTo:string = "";
  @Input() targetRoute:string = "";
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scrollService:ScrollService,
    private element:ElementRef,
    private router:Router
  ) {}

  @HostListener('mouseenter')
  onMouseOver(){
    (this.element.nativeElement as HTMLAnchorElement).style.cursor = "pointer";
  }

  @HostListener('click')
  onClick(){
    this.scrollService.scrollTo(this.appScrollTo,this.targetRoute);
  }
}