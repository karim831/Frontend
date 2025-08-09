import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  standalone: false,
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.css'
})
export class TeamMembersComponent {
  title:string = "Team Members";
  socialIcons:string[] = ['fab fa-facebook-f','fab fa-twitter','fab fa-linkedin-in','fab fa-youtube'];
  members:{img:string, socials:string[], name:string, description:string}[] = [
    {
      img:"team-01.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-02.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-03.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-04.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-05.png",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-06.png",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-07.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    },
    {
      img:"team-08.jpg",
      socials: ['https://www.facebook.com','https://www.twitter.com','https://www.linkedin.com','https://www.youtube.com'],
      name:"Name",
      description: "Simple Short Description"
    }
  ] 
}
