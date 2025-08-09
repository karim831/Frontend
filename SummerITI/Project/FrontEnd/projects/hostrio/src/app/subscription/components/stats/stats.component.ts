import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  title:string = "Our Awesome Stats";
  stats:{icon:string, number:number, stat: string}[] = [
    {icon: "fas fa-user fa-2x fa-fw", number: 150, stat: "Clients"},
    {icon: "fas fa-code fa-2x fa-fw", number: 135, stat: "Projects"},
    {icon: "fas fa-globe-asia fa-2x fa-fw", number: 50, stat: "Countries"},
    {icon: "far fa-money-bill-alt fa-2x fa-fw", number: 500, stat: "Money"}
  ]
}
