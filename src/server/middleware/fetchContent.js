import { makeMiddleware } from 'express-chain';
import indexQuery from '../queries/indexQuery';
import testQuery from '../queries/testQuery';

const regEx = /\/([a-zA-Z0-9\-]*)\/?([a-zA-Z0-9\-]*)?\/?([a-zA-Z0-9\-]*)?/g;

export default makeMiddleware('fetchContent', ({ url }, next) => {
  if (url.startsWith('/fetch')) {
    url.slice(6);
  }

  const [full, type, slug, index] = new RegExp(regEx).exec(url);

  let query = null;
  if (url === '/') {
    query = indexQuery;
  } else if (url === '/test') {
    query = testQuery;
  }

  query(url, (err, res) => {
    let content = res;
    if (err) {
      content = { err };
    }

    next(null, {
      [url]: content,
    });
  });
});
