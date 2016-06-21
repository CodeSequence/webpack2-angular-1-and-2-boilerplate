import './vendor/jquery';
import './vendor/angular';

import ngrxStore from './vendor/ngrx-store';

// components
import welcomeComponentModule from './components/welcome';
import reducer from './reducers';


angular.module('my-app', [
  welcomeComponentModule.name,
  ngrxStore.name
])
.constant('INITIAL_REDUCER', reducer);
