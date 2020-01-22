import React from "react";

import SW from "./Home.swiss";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";

let arr = Array.from(new Array(6).keys());
export default function Home(props) {
  return (
    <SW.Wrapper>
      <SW.CardsWrapper>
        {arr.map(() => {
          return <ArticleCard key={Math.floor(Math.random() * 99) + 1} />;
        })}
      </SW.CardsWrapper>
    </SW.Wrapper>
  );
}
