﻿import { Store, Action } from 'redux';

export interface AppState {
  isOnline: boolean;
}

export interface ExtendedStore<A> extends Store<A> {
  dispatch(promise: Promise<Action>): Promise<Action>;
  dispatch(func: (dispatch: {}, getState?: () => A) => void): void;
  dispatch<A extends Action>(action: A): A;
}
