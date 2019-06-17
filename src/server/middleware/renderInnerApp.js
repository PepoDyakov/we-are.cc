import React from 'react';
import { makeMiddleware } from 'express-chain';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { SwissProvider } from 'swiss-react';
import Root from 'client/containers/Root';

export default makeMiddleware('renderInnerApp', ({ store, req, res }, next) => {
  const context = {};
  const stylesContext = {};
  const page = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <SwissProvider context={stylesContext}>
          <Root />
        </SwissProvider>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const styles = stylesContext.toString();

  return next(null, {
    page,
    helmet,
    styles,
  });
});
