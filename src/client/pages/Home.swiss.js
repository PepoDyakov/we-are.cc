import { styleSheet } from "swiss-react";

export default styleSheet("Home", {
  Wrapper: {
    _size: "100%",
  },
  CardsWrapper: {
    _el: "div",
    _flex: ["row", "between", "top"],
    flexWrap: "wrap",
    width: "100%",
  },
});
