import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialBox = {
    title: 'Hostrio',
    socials: ['fab fa-facebook-f','fab fa-twitter','fab fa-youtube'],
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur'
  }

  infoBox = [
    {icon: 'fas fa-map-marker-alt fa-fw', info:'Egypt, Giza, Inside The Sphinx, Room Number 220'},
    {icon: 'fas fa-clock fa-fw', info:'Business Hours: From 10:00 To 18:00'},
    {icon: 'fas fa-phone-volume fa-fw', info: ['+20123456789','+20123456878']}
  ]

  imagesBox = ['gallery-01.png','gallery-02.png','gallery-03.jpg','gallery-04.png','gallery-05.jpg','gallery-06.png']

}
