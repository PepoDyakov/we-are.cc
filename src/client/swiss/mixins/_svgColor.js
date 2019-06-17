import { addMixin } from 'swiss-react';

addMixin('svgColor', (fill = null, stroke = null) => ({
  fill,
  stroke: stroke || fill,
}));
