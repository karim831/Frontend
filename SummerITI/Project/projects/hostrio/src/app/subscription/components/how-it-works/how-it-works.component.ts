import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: false,
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  title:string = "How It Works ?";
  image:string = "work-steps.png";

  works:{image:string, title:string, description:string}[] = [
    {
      image: "work-steps-1.png",
      title: "Business Analysis",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
    },
    {
      image: "work-steps-2.png",
      title: "Architecture",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
    },
    {
      image: "work-steps-3.png",
      title: "Developement",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
    },
  ]
}
