import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Status } from '../../store/models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status-list',
  template: `
      <ul>
          <li *ngFor="let st of status"><a routerLink="/status/{{st.id}}">{{ st.name }}</a></li>
      </ul>
  `,
  styles: []
})
export class StatusListComponent implements OnInit {
  @Input() public status: Status[] = [];

  constructor() { }

  ngOnInit() {
  }

}
