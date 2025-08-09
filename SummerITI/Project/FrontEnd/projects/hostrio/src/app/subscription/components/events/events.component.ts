import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscribeEventService } from '../../../core/services/subscribe-event.service';
@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit,OnDestroy{
  title:string = "Last Events";
  img:string = "events.png";
  header:string = "Tech Masters Event 2025";
  description:string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem blanditiis fuga aperiam recusandae maiores aspernatur at nemo, fugit optio. Tempore provident accusamus id et harum soluta cum voluptatibus asperiores saepe.";
  calender:{[key:string]:number} = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  calenderIterator:string[] = ['Days','Hours','Minutes','Seconds']

  private targetDate:Date;
  private interval:any;
  constructor(private subscribeService:SubscribeEventService){
    this.targetDate = new Date();
    this.targetDate.setDate(this.targetDate.getDate() + 15);
    this.targetDate.setHours(this.targetDate.getHours() + 8);
    this.targetDate.setMinutes(this.targetDate.getMinutes() + 45);
    this.targetDate.setSeconds(this.targetDate.getSeconds() + 58);
  }

  ngOnInit(){
    this.interval = setInterval(() => {
      this.updateCouner();
    },1000)
  } 

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  private updateCouner(){
    const now = new Date().getTime();
    let distance = this.targetDate.getTime() - now;

    if(distance < 0){
      this.calender = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
      clearInterval(this.interval);
    }

    this.calender = {
      days: Math.floor(distance / (1000 * 3600 * 24)),
      hours: Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / (1000))
    }
  }

  subscribe(event:Event,email:string){
    event.preventDefault();
    this.subscribeService.postSubscriper({email: email}).subscribe({
      next: (responce) => {alert(`success registeration`); console.log(responce)},
      error: (error) => console.log(`error',${error}`)
    });
  }

}
