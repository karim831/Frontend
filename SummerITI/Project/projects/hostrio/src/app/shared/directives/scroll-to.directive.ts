import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: false
})
export class ScrollToDirective {
  @Input() appScrollTo:string = "";
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private element:ElementRef
  ) {}

  @HostListener('mouseenter')
  onMouseOver(){
    (this.element.nativeElement as HTMLAnchorElement).style.cursor = "pointer";
  }

  @HostListener('click')
  onClick(){
    let e = this.document.getElementById(this.appScrollTo);
    e?.scrollIntoView({
      behavior:'smooth'
    })
  }
}