import { Component, OnInit } from '@angular/core';
import { LoadStatus } from './store/status/status.actions';
import { Store } from '@ngrx/store';
import { State } from './store';
import { LoadLaunches } from './store/launch/launch.actions';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = 10;

  constructor(
    private store: Store<State>,
    public swUpdate: SwUpdate
  ) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'There is a new version. Do you want to update?';
          if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }

  checkForUpdates() {
    this.swUpdate.checkForUpdate().then();
  }

  ngOnInit() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatus());
  }
}
