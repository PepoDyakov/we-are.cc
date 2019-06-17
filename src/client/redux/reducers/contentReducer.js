import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = fromJS({});

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.ADD_CONTENT: {
      if (payload.content) {
        Object.entries(payload.content).forEach(([slug, content]) => {
          state = state.set(slug, fromJS(content));
        });
      }
      return state;
    }
    default:
      return state;
  }
};
