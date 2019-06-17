import React from 'react';

import withContent from 'client/containers/withContent';

import SW from './NavBar.swiss';

export default withContent(NavBar);

function NavBar(props) {
  return <SW.Wrapper />;
}
