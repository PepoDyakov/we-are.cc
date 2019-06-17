import contentfulClient from '../utils/contentfulClient';
import generateSEO from '../utils/generateSEO';

export default (url, callback) => {
  const pageQuery = {
    content_type: 'test',
    'fields.slug': 'test',
  };

  let resObj = {};

  contentfulClient
    .getEntries(pageQuery)
    .then(response => {
      resObj.page = response.items[0];
      resObj.seo = generateSEO(response.items[0]);
      callback(null, resObj);
    })
    .catch(err => {
      callback(err);
    });
};
