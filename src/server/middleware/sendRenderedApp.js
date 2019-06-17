import { makeMiddleware } from 'express-chain';

export default makeMiddleware(
  'sendRenderedApp',
  ({ store, styles, page, helmet, res }) => {
    res.render('main', {
      page,
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      styles: styles.toString(),
      reduxState: JSON.stringify(store.getState().toJS())
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"'),
    });
  }
);
