import { createClient } from 'contentful';

export default createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'lhkokmnugxry',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'KvXQKX6XcALyjJ2J27azFSOQHZvasfDsJq-XvTvnf3s',
});
