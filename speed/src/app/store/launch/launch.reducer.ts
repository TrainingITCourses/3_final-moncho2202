import { Launch } from '../models/launch';
import { LaunchActions, LaunchActionTypes } from './launch.actions';


export interface LaunchesState {
  launches: Launch[];
}

export const initialState: LaunchesState = {
  launches: [],
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return {...state};
    case LaunchActionTypes.LaunchesLoaded:
      return { launches: action.payload };
    default:
      return state;
  }
}
