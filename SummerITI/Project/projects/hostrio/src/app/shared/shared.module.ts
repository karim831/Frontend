import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SpikesDividerComponent } from './components/spikes-divider/spikes-divider.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ScrollToDirective } from './directives/scroll-to.directive';



@NgModule({
  declarations: [
    SectionTitleComponent,
    SpikesDividerComponent,
    BackToTopComponent,
    ScrollToDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionTitleComponent,
    SpikesDividerComponent,
    BackToTopComponent,
    ScrollToDirective,
  ]
})
export class SharedModule { }
