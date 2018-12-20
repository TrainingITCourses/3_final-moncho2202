import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { SharedModule } from '../shared/shared.module';
import { LaunchesComponent } from './status/launches.component';
import { LaunchesCounterComponent } from './status/launches-counter.component';
import { LaunchesOrderComponent } from './status/launches-order.component';


const routes: Routes = [
  {
    path: '',
    component: StatusComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [StatusComponent, LaunchesComponent, LaunchesCounterComponent, LaunchesOrderComponent]
})
export class StatusModule { }
