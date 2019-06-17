import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';

export default styleSheet('Footer', {
  Wrapper: {
    _size: get => [`calc(100% - ${get('transitionPos')}px)`, '100%'],
    _flex: ['column', 'left', 'top'],
    backgroundColor: '$white1',
    margin: '0 auto',
    padding: '110px 100px 0 100px',
  },

  Content: {
    _flex: ['column', 'left', 'top'],
    maxWidth: '460px',
  },

  Title: {
    _el: 'h1',
    _textStyle: 'H2',
    marginBottom: '50px',
  },

  Actions: {
    _flex: ['row', 'left', 'center'],
  },

  Email: {
    _el: 'a',
    _flex: ['row', 'center', 'center'],
    _font: ['20px', '#FFFFFF', '20px', '400'],
    height: '51px',
    padding: '14px 16px',
    backgroundColor: '#000000',
    textAlign: 'center',
    letterSpacing: '-0.65px',
    textDecoration: 'none',
    marginRight: '24px',
  },

  Link: {
    _el: Link,
    _font: ['16px', '#000000', '16px', '$regular'],
    letterSpacing: '-0.52px',
    textDecoration: 'none',
    marginRight: '24px',

    blue: {
      _textStyle: 'Link',
      margin: '0',
    },
  },

  Navigation: {
    _el: 'nav',
    _size: ['100%', '60px'],
    _flex: ['row', 'end', 'center'],
  },

  Copy: {
    _el: 'p',
    _font: ['16px', '#000000', '16px', '$regular'],
    letterSpacing: '-0.52px',
    marginRight: 'auto',
  },

  List: {
    _el: 'ul',
    _flex: ['row', 'left', 'center'],
    listStyle: 'none',
  },
});
