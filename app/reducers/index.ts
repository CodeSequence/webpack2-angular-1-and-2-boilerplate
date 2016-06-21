import { ActionReducer } from '@ngrx/store';

export type State = string;

const reducer: ActionReducer<string> = function(state = 'Mike', action) {
  switch (action.type) {
    case 'CHANGE':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
