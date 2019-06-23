import { addGlobalStyles } from 'swiss-react';

addGlobalStyles({
  '.app': {
    _size: '100%',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  '.content': {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    padding: '0 130px',
    maxWidth: '1920px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
  },
});
