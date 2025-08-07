import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  title:string = 'Gallery';
  images:string[] = ['gallery-01.png','gallery-02.png','gallery-03.jpg','gallery-04.png','gallery-05.jpg','gallery-06.png']
}
