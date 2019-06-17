import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head(props) {
  const { url, headerImage, description } = props;
  let renderedTags = [];
  if (description) {
    renderedTags.push(
      <meta name="description" content={description} key="desc" />
    );
  }
  renderedTags.push(
    <meta property="og:locale" content="en_US" key="oglocale" />,
    <meta
      name="twitter:card"
      content="summary_large_image"
      key="twittercard"
    />,
    <meta name="twitter:site" content="@JeliazkovDesign" key="twitterhandle" />
  );

  if (url) {
    renderedTags.push(<meta property="og:url" content={url} key="ogurl" />);
  }

  if (headerImage) {
    renderedTags.push(
      <meta name="og:image" key="ogimage" content={`https:${headerImage}`} />
    );
  }

  return (
    <Helmet
      key={2}
      defaultTitle="Denislav Jeliazkov - Digital Product Designer and Strategist"
      titleTemplate="%s"
    >
      {renderedTags}
    </Helmet>
  );
}
