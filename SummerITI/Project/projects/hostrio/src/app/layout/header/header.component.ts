import { Component } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  image:string = "mega-menu.png";

  megaMenuGroups = [
    [
      { icon: 'far fa-comments fa-fw', text: 'Testimonials', href: 'testimonials' },
      { icon: 'far fa-user fa-fw', text: 'Team Members', href: 'team-members' },
      { icon: 'far fa-building fa-fw', text: 'Services', href: 'services' },
      { icon: 'far fa-check-circle fa-fw', text: 'Our Skills', href: 'our-skills' },
      { icon: 'far fa-clipboard fa-fw', text: 'How It Works', href: 'work-steps' }
    ],
    [
      { icon: 'far fa-calendar-alt fa-fw', text: 'Events', href: 'events' },
      { icon: 'fas fa-server fa-fw', text: 'Pricing Plans', href: 'pricing' },
      { icon: 'far fa-play-circle fa-fw', text: 'Top Videos', href: 'video' },
      { icon: 'far fa-chart-bar fa-fw', text: 'Stats', href: 'stats' },
      { icon: 'fas fa-percent fa-fw', text: 'Request A Discount', href: 'discount' }
    ]
  ];

  constructor(){}
}
