import { Store, Reducer, State, Dispatcher } from '@ngrx/store';

export default angular.module('@ngrx/store', [])
  .factory('INITIAL_STATE', ['INITIAL_REDUCER', reducer => reducer(undefined, { type: Dispatcher.INIT })])
  .service('Store', [ 'Dispatcher', 'Reducer', 'State', Store ])
  .service('Reducer', [ 'Dispatcher', 'INITIAL_REDUCER', Reducer ])
  .service('State', [ 'INITIAL_STATE', 'Dispatcher', 'Reducer', State ])
  .service('Dispatcher', [ Dispatcher ]);
