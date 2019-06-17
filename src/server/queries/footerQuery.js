import contentfulClient from '../utils/contentfulClient';

export default callback => {
  const query = {
    content_type: 'footer',
    order: '-sys.createdAt',
  };

  contentfulClient
    .getEntries(query)
    .then(response => {
      const footer = response.items[0];
      callback(null, footer);
    })
    .catch(err => {
      callback(err);
    });
};
