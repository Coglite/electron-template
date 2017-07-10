import { Dispatch } from 'redux';
import { createAction, Action } from 'redux-actions';
import { UPDATE_ONLINE_STATE } from '../constants/ActionTypes';
import { AppState } from '../types';

export const updateOnlineState = createAction<boolean>(UPDATE_ONLINE_STATE);
