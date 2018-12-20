import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { LaunchesState } from '../../store/launch/launch.reducer';
import { Launch } from '../../store/models/launch';
import { ActivatedRoute } from '@angular/router';
import { StatusState } from '../../store/status/status.reducer';

@Component({
  selector: 'app-status',
  template: `
      <app-header [pagTitle] = "title"></app-header>
      <app-launches [launches] = "launches"></app-launches>
  `,
  styles: []
})
export class StatusComponent implements OnInit {
  public title = '';
  public launches: Launch[];

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const statusId = +params['id'];
      this.store
        .select(s => s.launch)
        .subscribe((value: LaunchesState) => {
          this.launches = value.launches.filter(item => item.status === statusId);
        });
      this.store
        .select(s => s.status)
        .subscribe((value: StatusState) => {
          const status = value.status.find(item => item.id === statusId);
          this.title = status.name;
        });
    });
  }

}
