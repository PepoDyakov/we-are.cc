import contentfulClient from '../utils/contentfulClient';

export default function(callback) {
  const query = {
    content_type: 'navBar',
  };

  contentfulClient
    .getEntries(query)
    .then(response => {
      const respObj = response.items[0];
      callback(null, respObj);
    })
    .catch(err => {
      callback(err);
    });
}
