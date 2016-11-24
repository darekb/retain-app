import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
  color: string,
  title: string,
  value: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface State {
  notes: Array<Note>
}

const defaultState = {
  notes: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable().distinctUntilChanged()

  setState(state: State) {
    this._store.next(state);
    console.log('setState', this._store);
  }

  getState(): State {
    console.log('getState', this._store);
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
    console.log('purge', this._store);
  }
}
