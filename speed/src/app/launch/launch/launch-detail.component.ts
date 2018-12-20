import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../store/models/launch';
import { Status } from '../../store/models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-detail',
  template: `
    <div *ngIf="launch!=null">
        <app-launch-status [statusId]="launch.status"
                           [statuses]="statuses"></app-launch-status>
        <h3>At {{ launch.location.name }} On {{ launch.net }}.</h3>
        <section *ngIf="launch.missions && launch.missions[0]">
            {{ launch.missions[0].description }}
        </section>
        <hr>
        <img [src]="launch.rocket.imageURL" alt="Photo of {{ launch.rocket.name }}">
    </div>
  `,
  styles: []
})
export class LaunchDetailComponent implements OnInit {
  @Input() public launch: Launch;
  @Input() public statuses: Status[];

  constructor() { }

  ngOnInit() {
  }

}
