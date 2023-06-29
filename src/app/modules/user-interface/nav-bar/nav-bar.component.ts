import { Component } from '@angular/core';
import { INavigationRoute } from 'src/app/interfaces/i-navigation-route';

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
}

interface INavigationRoutes {
  home: INavigationRoute;
  aboutMe: INavigationRoute;
  pricing: INavigationRoute;
  enquire: INavigationRoute;
}
