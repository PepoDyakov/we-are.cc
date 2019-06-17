import React from 'react';

import withContent from 'client/containers/withContent';

import { ReactComponent as Logo } from 'client/assets/icons/logo.svg';

import SW from './NavBar.swiss';

export default withContent(NavBar);

function NavBar(props) {
  const items = props.navBar.getIn(['list']);
  const email = props.navBar.getIn(['email']);
  return (
    <SW.Wrapper>
      <Logo />
      <SW.Navigation>
        {items.map(item => (
          <SW.NavigationItem key={item.get('url')} to={item.get('url')}>
            {item.get('title')}
          </SW.NavigationItem>
        ))}
        <SW.Email href={`mailto:${email}`}>{email}</SW.Email>
      </SW.Navigation>
    </SW.Wrapper>
  );
}
