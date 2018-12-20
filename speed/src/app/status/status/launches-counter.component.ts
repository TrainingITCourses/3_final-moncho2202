import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../store/models/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-counter',
  template: `
      <p>{{ launches.length }} launches</p>
  `,
  styles: []
})
export class LaunchesCounterComponent implements OnInit {
  @Input() public launches: Launch[] = [];

  constructor() { }

  ngOnInit() {
  }

}
