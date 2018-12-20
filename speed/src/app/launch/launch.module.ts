import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { SharedModule } from '../shared/shared.module';
import { LaunchDetailComponent } from './launch/launch-detail.component';
import { LaunchStatusComponent } from './launch/launch-status.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LaunchComponent, LaunchDetailComponent, LaunchStatusComponent]
})
export class LaunchModule { }
