import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notAvailableInProductionGuard } from './guards/not-available-in-production.guard';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
