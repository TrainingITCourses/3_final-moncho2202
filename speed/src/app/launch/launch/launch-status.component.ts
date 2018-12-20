import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Status } from '../../store/models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-status',
  template: `
    <h2>
      {{ status.description }}
    </h2>
  `,
  styles: []
})
export class LaunchStatusComponent implements OnInit {
  @Input() public statusId: number;
  @Input() public statuses: Status[];
  public status: Status;

  constructor() { }

  ngOnInit() {
    this.status = this.statuses.find(s => s.id === this.statusId);
  }

}
