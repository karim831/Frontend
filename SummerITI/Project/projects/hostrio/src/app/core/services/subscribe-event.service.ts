import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribers } from '../models/subscribers';
import { Observable} from 'rxjs';
import { Subscriber } from '../models/subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscribeEventService {
  private apiUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  postSubscriper(subscriber:Subscriber):Observable<Subscribers>{
    return this.http.post<Subscribers>(`${this.apiUrl}/subscribers`,subscriber);
  }
}
