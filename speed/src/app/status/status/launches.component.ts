import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../store/models/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches',
  template: `
    <app-launches-counter [launches] = "launches"></app-launches-counter>
    <app-launches-order
            (sortAsc)="onSortAsc()"
            (sortDesc)="onSortDesc()"></app-launches-order>
    <div *ngIf="launches.length > 0">
      <ul>
          <li *ngFor="let launch of launches"><a routerLink="/launch/{{launch.id}}">{{ launch.name }}</a></li>
      </ul>
    </div>
  `,
  styles: []
})
export class LaunchesComponent implements OnInit {

  constructor() { }
  @Input() public launches: Launch[] = [];

  static date_sort_asc(l1: Launch, l2: Launch) {
    const d1 = new Date(l1.net);
    const d2 = new Date(l2.net);
    return (d1 > d2) ? 1 : ((d1 < d2) ? -1 : 0);
  }
  static date_sort_desc(l1: Launch, l2: Launch) {
    const d1 = new Date(l1.net);
    const d2 = new Date(l2.net);
    return (d1 > d2) ? -1 : ((d1 < d2) ? 1 : 0);
  }

  ngOnInit() {
  }

  onSortAsc = () => this.launches.sort(LaunchesComponent.date_sort_asc);
  onSortDesc = () => this.launches.sort(LaunchesComponent.date_sort_desc);
}
