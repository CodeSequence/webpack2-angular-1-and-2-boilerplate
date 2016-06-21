import * as angular from 'angular';
import { Store } from '@ngrx/store';

import { State } from '../reducers';

export class WelcomeComponent {
  name = '';

  constructor(Store: Store<State>) {
    Store.subscribe(s => this.name = s);
  }
}

export default angular.module('my-app.components.wecome', []).component('maWelcome', {
  controller: WelcomeComponent,
  template: `
    Welcome! Welcome all! {{ $ctrl.name }}
  `
});
