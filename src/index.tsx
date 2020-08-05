import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

function counter(state = 0, action: { type: string }): any {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return (state = 0);
  }
}

const store = createStore(counter);
store.subscribe(() => console.log('хранилище изменилось', store.getState()));
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET' });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
