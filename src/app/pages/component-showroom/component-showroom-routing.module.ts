import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentShowroomComponent } from './component-showroom.component';

const routes: Routes = [{ path: '', component: ComponentShowroomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentShowroomRoutingModule { }
