import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  title:string = 'Features';
  features = [
    {image: 'features-01.jpg',info: {type: 'Quality',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima'}},
    {image: 'features-02.jpg',info: {type: 'Time',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima'}},
    {image: 'features-03.jpg',info: {type: 'Passion',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima'}}
  ];
}
