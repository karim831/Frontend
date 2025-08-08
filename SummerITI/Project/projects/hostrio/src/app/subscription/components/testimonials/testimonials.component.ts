import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  title:string = "Testimonials";
  testimonials:{img:string, name:string, job:string,filledStars:number, comment:string}[] = [
    {
      img: "avatar-01.png",
      name: "Mohamed Farag",
      job: "Full Stack Developer",
      filledStars: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    {
      img: "avatar-02.png",
      name: "Mohamed Ibrahim",
      job: "Full Stack Developer",
      filledStars: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    {
      img: "avatar-03.png",
      name: "Shady Nabil",
      job: "Full Stack Developer",
      filledStars: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    {
      img: "avatar-04.png",
      name: "Amr Hendawy",
      job: "Full Stack Developer",
      filledStars: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    {
      img: "avatar-05.png",
      name: "Sherief Ashraf",
      job: "Full Stack Developer",
      filledStars: 3,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    {
      img: "avatar-06.png",
      name: "Osama Mohamed",
      job: "Full Stack Developer",
      filledStars: 3,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
    },
    
  ]
}
