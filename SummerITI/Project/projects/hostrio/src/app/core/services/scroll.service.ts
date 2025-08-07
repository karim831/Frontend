import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToSection(sectionId: string): void{}
  scrollToTop(): void{}
}
