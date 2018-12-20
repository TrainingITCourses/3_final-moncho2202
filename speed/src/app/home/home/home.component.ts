import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Status } from '../../store/models/status';
import { State } from '../../store';
import { LaunchesState } from '../../store/launch/launch.reducer';
import { StatusState } from '../../store/status/status.reducer';

@Component({
  selector: 'app-home',
  template: `
    <app-header [pagTitle] = "title"></app-header>
    <app-status-list [status] = "status"></app-status-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  public title = '';
  public status: Status[] = [];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store
      .select(s => s.launch)
      .subscribe((value: LaunchesState) => {
        if (value.launches.length > 0) {
          this.title = value.launches.length + ' launches';
        }
      });
    this.store
      .select(s => s.status)
      .subscribe((value: StatusState) => {
        this.status = value.status as Status[];
      });
  }

}
