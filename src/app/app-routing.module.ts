import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notAvailableInProductionGuard } from './guards/not-available-in-production.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'component-showroom',
    canActivate: [notAvailableInProductionGuard],
    loadChildren: () =>
      import('./pages/component-showroom/component-showroom.module').then(
        (m) => m.ComponentShowroomModule
      ),
  },
  {
    path: 'not-available',
    loadChildren: () =>
      import('./pages/not-available/not-available.module').then(
        (m) => m.NotAvailableModule
      ),
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./pages/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'enquire',
    loadChildren: () =>
      import('./pages/enquire/enquire.module').then((m) => m.EnquireModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
