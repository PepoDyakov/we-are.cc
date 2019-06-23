import React from 'react';

import SW from './Footer.swiss';

export default function Footer(props) {
  return (
    <SW.Wrapper>
      <SW.TextBox>
        <SW.Title>{props.title}</SW.Title>
        <SW.Subtext>{props.subText}</SW.Subtext>
      </SW.TextBox>
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
      <SW.Logo src={props.logo} />
    </SW.Wrapper>
  );
}
