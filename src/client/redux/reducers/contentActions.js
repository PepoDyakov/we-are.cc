import * as types from '../constants';

export const add = content => ({
  type: types.ADD_CONTENT,
  payload: { content },
});
