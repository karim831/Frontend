import { Injectable } from '@angular/core';
import { from, interval, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications:string[];
  constructor() {
    this.notifications = [
      "You have read messages",
      "people reacting to your post",
      "hamada sent you a friend request",
      // "",
      "post shared successfully"
    ]  
  }

  getNotification():Observable<string>{
    return from(this.notifications);
    // return new Observable((subscriber) => {
    //   let counter = 0;
    //   const interval = setInterval(()=> {
    //     console.log("here")
    //     if(counter === this.notifications.length){
    //       subscriber.complete();
    //       clearInterval(interval);
    //     }

    //     if(this.notifications[counter] === ""){
    //       subscriber.error("Empty Notification");
    //       clearInterval(interval);
    //     }
          
    //     subscriber.next(this.notifications[counter++]);
    //   },2000);     
      
    //   return function unsubscribe(){
    //     clearInterval(interval);
    //   } 
    // });
  }
}
