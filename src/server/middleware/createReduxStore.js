import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { makeMiddleware } from 'express-chain';
import contentReducer from 'client/redux/reducers/contentReducer';

export default makeMiddleware(
  'createReduxStore',
  ({ content, navbar }, next) => {
    const initialState = (content && { content }) || {};
    initialState.navBar = navbar;
    // Create initial instance of REDUX Store
    const store = createStore(contentReducer, fromJS(initialState));
    return next(null, store);
  }
);
