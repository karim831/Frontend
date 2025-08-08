import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  title:string = 'Services';
  services:{icon:string,service:string}[] = [
    {icon: "fas fa-user-shield fa-4x", service: "Security"},
    {icon: "fas fa-tools fa-4x", service: "Fixing Issues"},
    {icon: "fas fa-map-marked-alt fa-4x", service: "Location"},
    {icon: "fas fa-laptop-code fa-4x", service: "Coding"},
    {icon: "fas fa-palette fa-4x", service: "Design"},
    {icon: "fas fa-bullhorn fa-4x", service: "Marketing"},
  ]
}
