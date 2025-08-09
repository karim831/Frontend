import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  image:string = "skills.png";
  skills:{skill:string, percentage:number}[] = [
    {skill: "HTML",percentage: 80},
    {skill: "CSS",percentage: 90},
    {skill: "JS",percentage: 75},
    {skill: "Angular",percentage: 88}
  ]
}
