import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendDiscountRequest(formData: any): Observable<any>{return new Observable()}
}
