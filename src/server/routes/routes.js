import express from 'express';
import renderInnerApp from '../middleware/renderInnerApp';
import sendRenderedApp from '../middleware/sendRenderedApp';
import fetchContent from '../middleware/fetchContent';
import sendAPIResponse from '../middleware/sendAPIResponse';
import redirectTrailingSlash from '../middleware/redirectTrailingSlash';
import createReduxStore from '../middleware/createReduxStore';
import fetchFooter from '../middleware/fetchFooter';
import fetchNavBar from '../middleware/fetchNavBar';

const router = express.Router();

router.get(
  '/fetch/*',
  fetchFooter.save('footer'),
  fetchContent('req.url'),
  sendAPIResponse('result:data', 'res')
);

router.get(
  '*',
  redirectTrailingSlash('req', 'res'),
  fetchNavBar.save('navbar'),
  fetchContent('req.url'),
  createReduxStore('navbar', 'result:content').save('store'),
  renderInnerApp('store', 'req', 'res').save(
    'result.page',
    'result.helmet',
    'result.styles'
  ),
  sendRenderedApp('store', 'styles', 'page', 'helmet', 'res')
);

export default router;
