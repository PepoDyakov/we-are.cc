import { styleSheet } from "swiss-react";

export default styleSheet("ArticleCard", {
  Wrapper: {
    _el: "div",
    _flex: ["column", "start", "start"],
    maxWidth: "580px",
    marginBottom: "64px",
  },
  TextContainer: {
    _el: "div",
    _flex: ["column", "start", "start"],
    width: "100%",
    marginTop: "32px",
  },
  Title: {
    _el: "h3",
    _font: ["40px", "#000000", "48px", "$bold"],
  },
  Text: {
    _el: "p",
    _font: ["20px", "#000000", "30px", "$regular"],
    marginTop: "14px",
  },
});
