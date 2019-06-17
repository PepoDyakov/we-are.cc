import { makeMiddleware } from 'express-chain';

export default makeMiddleware('redirectTrailingSlash', ({ req, res }, next) => {
  if (req.path.substring(-1) === '/' && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});
