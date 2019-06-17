import { makeMiddleware } from 'express-chain';

export default makeMiddleware('sendAPIResponse', ({ data, res }, next) => {
  res.json({
    ok: true,
    result: data || null,
  });
});
