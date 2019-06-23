import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';

export default styleSheet('NavBar', {
  Wrapper: {
    _size: ['100%', '140px'],
    _flex: ['row', 'between', 'center'],
    padding: '0 130px',
    maxWidth: '1920px',
    margin: '0 auto',
  },

  Title: {
    _el: 'h1',
    _textStyle: 'navbar',
  },

  Navigation: {
    _el: 'nav',
    _flex: ['row', 'left', 'center'],
  },

  NavigationLink: {
    _el: Link,
    _textStyle: 'navbar',
    textDecoration: 'none',

    '&:not(:last-child)': {
      marginRight: '50px',
    },
  },
});
