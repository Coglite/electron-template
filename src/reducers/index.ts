import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';
import { AppState } from '../types';
import { DEFAULT_STATE, UPDATE_ONLINE_STATE } from '../constants';

const isOnline = handleActions<boolean>({

  [UPDATE_ONLINE_STATE]: (state: boolean, action: Action<boolean>): boolean =>
    (action.payload !== undefined) ? action.payload : state,

}, DEFAULT_STATE.isOnline);

export default combineReducers<AppState>({
  isOnline,
});
