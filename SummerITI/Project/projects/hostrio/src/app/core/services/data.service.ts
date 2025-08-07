import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { TeamMember } from '../models/team-member';
import { Testimonial } from '../models/testimonial';
import { Gallery } from '../models/gallery';
import { Service } from '../models/service';
import { Skill } from '../models/skill';
import { PricingPlan } from '../models/pricing-plan';
import { TopVideo } from '../models/top-video';
import { Stats } from '../models/stats';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl;
  constructor(private http:HttpClient){
    this.baseUrl = "/data"
  }
  getArticles(): Observable<Article[]>{return this.http.get<Article[]>(`${this.baseUrl}/articles.json`);}
  getTeamMembers(): Observable<TeamMember[]>{return new Observable()}
  getTestimonials(): Observable<Testimonial[]>{return new Observable()}
  getGalleryItems(): Observable<Gallery[]>{return new Observable()}
  getServices(): Observable<Service[]>{return new Observable()}
  getSkills(): Observable<Skill[]>{return new Observable()}
  getPricingPlans(): Observable<PricingPlan[]>{return new Observable()}
  getVideos(): Observable<TopVideo[]>{return new Observable()}
  getStats(): Observable<Stats>{return new Observable()}
}
