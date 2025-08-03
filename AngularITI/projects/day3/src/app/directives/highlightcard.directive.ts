import { Directive, ElementRef, Host, HostListener, Input, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightcard]'
})
export class HighlightcardDirective implements OnChanges{
  @Input() appHighlightcard:string = "";
  constructor(private e: ElementRef) {
    
  }
  private highLight(backgroundColor: string){
    (this.e.nativeElement as HTMLElement).style.backgroundColor = backgroundColor;
  }

  ngOnChanges(){
    this.highLight(this.appHighlightcard);
  }

  @HostListener("mouseover") over(){
    this.highLight("pink");
  }

  @HostListener("click") click(){
    this.highLight("yellow");
  }

  @HostListener("mouseout") out(){
    this.highLight("gray");
  }
}
