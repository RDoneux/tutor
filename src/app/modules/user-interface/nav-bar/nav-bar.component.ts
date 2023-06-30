import { Component } from '@angular/core';
import {
  IExternalLinks,
  INavigationRoute,
} from 'src/app/interfaces/i-navigation-route';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  routes: INavigationRoutes = {
    home: { url: '', label: '' },
    aboutMe: { url: '/about-me', label: 'About Me' },
    pricing: { url: 'pricing', label: 'Pricing' },
    enquire: { url: 'enquire', label: 'Enquire' },
  };

  externalLinks: IExternalLinks = {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedIn: 'https://linkedin.com',
  };

  showMobileMenu: boolean = false;

  displayMobileMenu(): void {
    this.showMobileMenu = true;
  }

  hideMobileMenu(): void {
    this.showMobileMenu = false;
  }
}

interface INavigationRoutes {
  home: INavigationRoute;
  aboutMe: INavigationRoute;
  pricing: INavigationRoute;
  enquire: INavigationRoute;
}
