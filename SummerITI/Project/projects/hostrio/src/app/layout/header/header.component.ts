import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  currentRoute: string = '';

  homeNavItems = [
    { text: 'Articles', fragment: 'articles' },
    { text: 'Gallery', fragment: 'gallery' },
    { text: 'Features', fragment: 'features' },
    { text: 'Subscription', route: '/subscription', isLink: true }
  ];

  subscriptionNavItems = [
    { text: 'Skills', fragment: 'skills' },
    { text: 'Services', fragment: 'services' },
    { text: 'Stats', fragment: 'stats' }
  ];

  
  otherLinks = [
    { icon: 'far fa-comments fa-fw', text: 'Testimonials', fragment: 'testimonials' },
    { icon: 'far fa-user fa-fw', text: 'Team Members', fragment: 'team-members' },
    { icon: 'far fa-calendar-alt fa-fw', text: 'Events', fragment: 'events' },
    { icon: 'far fa-play-circle fa-fw', text: 'Top Videos', fragment: 'video' },
    { icon: 'fas fa-percent fa-fw', text: 'Request A Discount', fragment: 'discount' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateCurrentRoute();
      });

    this.updateCurrentRoute();
    this.handleFragment();
  }


  private updateCurrentRoute() {
    this.currentRoute = this.router.url.split('#')[0];
  }

  private handleFragment() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }

  onLogoClick() {
    this.router.navigate(['/home']);
  }

  onNavClick(item: any) {
    if (item.isLink && item.route) {
      this.router.navigate([item.route]);
    } else if (item.fragment) {
      this.router.navigate([this.currentRoute], { fragment: item.fragment });
    }
  }

  onOtherLinkClick(link: any) {
    this.router.navigate([this.currentRoute], { fragment: link.fragment });
  }


  get currentNavItems() {
    if (this.currentRoute === '/home' || this.currentRoute === '') {
      return this.homeNavItems;
    } else if (this.currentRoute === '/subscription') {
      return this.subscriptionNavItems;
    }
    return [];
  }

  get showOtherLinks() {
    return this.currentRoute === '/subscription';
  }
}