import express from 'express';
import createReduxStore from '../middleware/createReduxStore';
import fetchContent from '../middleware/fetchContent';
import fetchFooter from '../middleware/fetchFooter';
import fetchNavBar from '../middleware/fetchNavBar';
import redirectTrailingSlash from '../middleware/redirectTrailingSlash';
import renderInnerApp from '../middleware/renderInnerApp';
import sendAPIResponse from '../middleware/sendAPIResponse';
import sendRenderedApp from '../middleware/sendRenderedApp';

const router = express.Router();

router.get(
  '/fetch/*',
  fetchNavBar().save('navbar'),
  fetchFooter().save('footer'),
  fetchContent('req.url'),
  sendAPIResponse('result:data', 'res')
);

router.get(
  '*',
  redirectTrailingSlash('req', 'res'),
  fetchNavBar().save('navbar'),
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
