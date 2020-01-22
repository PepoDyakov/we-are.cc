import React from "react";
import SW from "./ArticleCard.swiss";

export function ArticleCard(props) {
  return (
    <SW.Wrapper>
      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt={props.imgText}
      />
      <SW.TextContainer>
        <SW.Title>Card Title</SW.Title>
        <SW.Text>Card text is here, let me know what you think</SW.Text>
      </SW.TextContainer>
    </SW.Wrapper>
  );
}
