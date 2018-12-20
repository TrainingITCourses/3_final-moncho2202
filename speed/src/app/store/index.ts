import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromLaunch from './launch/launch.reducer';


export interface State {
  router: any;
  status: fromStatus.StatusState;
  launch: fromLaunch.LaunchesState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  status: fromStatus.reducer,
  launch: fromLaunch.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
