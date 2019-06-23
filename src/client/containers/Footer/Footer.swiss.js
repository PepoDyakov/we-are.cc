import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';

export default styleSheet('Footer', {
  Wrapper: {
    _size: ['100%', '310px'],
    _flex: ['row', 'between', 'top'],
    backgroundColor: '#000000',
    padding: '50px 130px 0 130px',
    maxWidth: '1920px',
    margin: '0 auto',
  },

  TextBox: {
    _flex: ['column', 'left', 'top'],
  },

  Title: {
    _el: 'h1',
    _textStyle: 'navbar',
    color: '#FFFFFF',
  },

  Subtext: {
    _el: 'p',
    _font: ['15px', '#FFFFFF', '18px', '$regular'],
    marginTop: '23px',
  },

  Navigation: {
    _el: 'nav',
    _flex: ['row', 'left', 'center'],
  },

  NavigationLink: {
    _el: Link,
    _textStyle: 'navbar',
    color: '#FFFFFF',
    textDecoration: 'none',

    '&:not(:last-child)': {
      marginRight: '50px',
    },
  },

  Logo: {
    _el: 'img',
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});
