import contentfulClient from '../utils/contentfulClient';
import generateSEO from '../utils/generateSEO';

export default function(url, callback) {
  const pageQuery = {
    content_type: 'home',
    'fields.slug': 'index',
    include: 3,
  };

  const resObj = {};

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
}
