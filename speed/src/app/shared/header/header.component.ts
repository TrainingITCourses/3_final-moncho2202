import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  template: `
    <h1>
      {{ pagTitle }}
    </h1>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input() public pagTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
