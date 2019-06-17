import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SwissProvider } from 'swiss-react';
import Root from 'client/containers/Root';
import contentReducer from 'client/redux/reducers/contentReducer';

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

hydrate(
  <Provider store={store}>
    <SwissProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </SwissProvider>
  </Provider>,
  document.getElementById('root')
);
