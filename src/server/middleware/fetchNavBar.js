import { makeMiddleware } from 'express-chain';

import navbarQuery from '../queries/navbarQuery';

export default makeMiddleware('fetchNavBar', (input, next) => {
  navbarQuery((error, result) => {
    if (error) {
      next(error);
    } else {
      next(null, result);
    }
  });
});
