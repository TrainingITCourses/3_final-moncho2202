import { Component, OnInit } from '@angular/core';
import { LaunchesState } from '../../store/launch/launch.reducer';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Launch } from '../../store/models/launch';
import { Status } from '../../store/models/status';
import { StatusState } from '../../store/status/status.reducer';

@Component({
  selector: 'app-launch',
  template: `
      <app-header [pagTitle] = "title"></app-header>
      <app-launch-detail [launch] = "launch"
                         [statuses]="statuses"></app-launch-detail>
  `,
  styles: []
})
export class LaunchComponent implements OnInit {
  public title = '';
  public launch: Launch;
  public statuses: Status[];

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const launchId = +params['id'];
      this.store
        .select(s => s.launch)
        .subscribe((value: LaunchesState) => {
          this.launch = value.launches.find(item => item.id === launchId);
          if (this.launch) {
            this.title = this.launch.name;
          }
        });
      this.store
        .select(s => s.status)
        .subscribe((value: StatusState) => {
          this.statuses = value.status;
        });
    });
  }

}
