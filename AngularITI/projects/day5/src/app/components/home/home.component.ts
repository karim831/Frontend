import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy{
  subscription:Subscription;
  constructor(private _notificationService:NotificationService){
    this.subscription = this._notificationService.getNotification().pipe(
      filter((msg) => msg.startsWith("h"))  
      ,map((msg) => `${msg} Mona`)
      ).subscribe({
        next: (notification) => alert(notification + "mona"),
        error: () => alert("NOOOOOOOOOOOOO"),
        complete: () => {console.log("Completed");}
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
