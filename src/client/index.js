import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SwissProvider } from 'swiss-react';
import Root from 'client/containers/Root';
import contentReducer from 'client/redux/reducers/contentReducer';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const preloadedState = JSON.parse(
  window.__PRELOADED_STATE__
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f')
);

delete window.__PRELOADED_STATE__;

const store = createStore(contentReducer, fromJS(preloadedState));
window.getState = store.getState;
renderMethod(
  <Provider store={store}>
    <SwissProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </SwissProvider>
  </Provider>,
  document.getElementById('root')
);
