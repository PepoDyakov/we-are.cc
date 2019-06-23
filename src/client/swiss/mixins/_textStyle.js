import { addMixin } from 'swiss-react';

addMixin('textStyle', (style = 'item') => {
  switch (style) {
    case 'H1':
      return {
        _font: ['60px', '#000000', '64px', '$regular'],
        letterSpacing: '-1.94px',
      };
    case 'H2':
      return {
        _font: ['40px', '#000000', '45px', '$regular'],
        letterSpacing: '-1.29px',
      };
    case 'H3-GREY3':
      return {
        _font: ['24px', '$grey3', '24px', '$regular'],
        letterSpacing: '-1.29px',
      };
    case 'H3':
      return {
        _font: ['24px', '#000000', '24px', '$regular'],
        letterSpacing: '-1.29px',
      };
    case 'Paragraph':
      return {
        _font: ['24px', '#FFFFFF', '31px', '$regular'],
        letterSpacing: '1px',
      };
    case 'Link':
      return {
        _font: ['18px', '$blue', '35px', '$regular'],
        letterSpacing: '-0.58px',
      };
    case 'navbar':
      return {
        _font: ['32px', '#000000', '38px', '$bold'],
        textTransform: 'lowercase',
      };
  }
});
