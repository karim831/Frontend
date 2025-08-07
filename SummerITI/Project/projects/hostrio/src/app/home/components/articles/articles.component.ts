import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  title:string = "Articles";
  articles = [
    {image: "art1.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art2.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art3.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art4.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art5.jpg",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art6.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art7.webp",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"},
    {image: "art8.jpg",title: "Test Title", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit", icon: "fas fa-long-arrow-alt-right"}
  ]
}
