import React from 'react';

import SW from './NavBar.swiss';

export default function NavBar(props) {
  return (
    <SW.Wrapper>
      <SW.Title>{props.title}</SW.Title>
      <SW.Navigation>
        {props.list.map(item => {
          return (
            <SW.NavigationLink
              key={`#-${item.get('title')}`}
              to={item.get('url')}
            >
              {item.get('title')}
            </SW.NavigationLink>
          );
        })}
      </SW.Navigation>
    </SW.Wrapper>
  );
}
