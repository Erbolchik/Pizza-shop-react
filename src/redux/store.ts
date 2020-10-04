import { createStore, combineReducers } from 'redux';
import { filters, pizzas } from './reducers';
const rootReducer = combineReducers({
  filters,
  pizzas,
});
const store = createStore(
  rootReducer /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
console.log(store);
export default store;
