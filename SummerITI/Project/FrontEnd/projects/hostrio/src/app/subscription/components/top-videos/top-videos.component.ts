import { Component } from '@angular/core';

@Component({
  selector: 'app-top-videos',
  standalone: false,
  templateUrl: './top-videos.component.html',
  styleUrl: './top-videos.component.css'
})
export class TopVideosComponent {
  title:string = "Top Videos";
  sections:{title:string, time:string}[] = [
    {title: "How To Create Sub Domain", time: "02:18"},
    {title: "Playing With The DNS", time: "03:18"},
    {title: "Everything About The Virtual Hosts", time: "04:16"},
    {title: "Uncharted Beating The Last Boss", time: "5:18"},
    {title: "Ys Oath In Felghana Overview", time: "10:18"},
    {title: "Ys Series All Games Ending", time: "15:20"}
  ];
  preview:{img:string, description:string} = {
    img: "video-preview.jpg",
    description: "Everything About The Virtual Hosts"
  }
}
