import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-order',
  template: `
      <input type="button" value="Sort asc" (click)="sortAscClicked()">
      <input type="button" value="Sort desc" (click)="sortDescClicked()">
  `,
  styles: []
})
export class LaunchesOrderComponent implements OnInit {
  @Output() public sortAsc = new EventEmitter();
  @Output() public sortDesc = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public sortAscClicked() {
    this.sortAsc.next();
  }
  public sortDescClicked() {
    this.sortDesc.next();
  }
}
