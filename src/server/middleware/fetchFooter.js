import { makeMiddleware } from 'express-chain';

import footerQuery from '../queries/footerQuery';

export default makeMiddleware('fetchFooter', (input, next) => {
  footerQuery((error, result) => {
    if (error) {
      next(error);
    } else {
      next(null, result);
    }
  });
});
