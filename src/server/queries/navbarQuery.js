import contentfulClient from '../utils/contentfulClient';

export default callback => {
  const query = {
    content_type: 'navBar',
    order: 'sys.createdAt',
  };

  contentfulClient
    .getEntries(query)
    .then(response => {
      const navbar = response.items[0];
      callback(null, navbar);
    })
    .catch(err => {
      callback(err);
    });
};
