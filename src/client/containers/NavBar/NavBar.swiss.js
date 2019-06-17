import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';
import Icon from 'client/components/Icon/Icon';

export default styleSheet('NavBar', {
  Wrapper: {
    _el: 'nav',
    _size: ['100%', '135px'],
    _flex: ['row', 'between', 'center'],
    padding: '40px 45px 40px 40px',
    maxWidth: '1920px',
    margin: '0 auto',
  },

  Logo: {
    _el: Icon,
  },

  Navigation: {
    _el: 'ul',
    _flex: ['row', 'left', 'center'],
    height: '100%',
    listStyle: 'none',
  },

  NavigationItem: {
    _el: Link,
    _size: ['100px', '100%'],
    _flex: ['row', 'center', 'center'],
    _textStyle: 'navbar',
    textAlign: 'center',
    color: '$grey1',
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
  },
});
