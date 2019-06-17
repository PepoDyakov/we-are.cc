import React from 'react';

import Spacing from 'client/components/Spacing/Spacing';

import SW from './Footer.swiss';

export default function Footer(props) {
  const { scrollPos } = props;
  const transitionPos = (scrollPos / 2800) * 240;
  return (
    <SW.Wrapper transitionPos={transitionPos > 240 ? 240 : transitionPos}>
      <SW.Content>
        <SW.Title>
          Want to work together, have a question or something else?
        </SW.Title>
        <SW.Actions>
          <SW.Email href={`mailto:asd`}>hi@jeliazkovdesign.com</SW.Email>
          <SW.Link to="/about" blue>
            Learn more about me
          </SW.Link>
        </SW.Actions>
      </SW.Content>
      <Spacing height={180} />
      <SW.Navigation>
        <SW.Copy>2019 Denislav Jeliazkov</SW.Copy>
        <SW.List>
          <SW.Link to="/">Twitter</SW.Link>
          <SW.Link to="/">Twitter</SW.Link>
          <SW.Link to="/">Twitter</SW.Link>
          <SW.Link to="/">Twitter</SW.Link>
        </SW.List>
      </SW.Navigation>
    </SW.Wrapper>
  );
}
