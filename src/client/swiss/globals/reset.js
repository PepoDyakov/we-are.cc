import { addGlobalStyles } from 'swiss-react';

addGlobalStyles({
  '*,*:after,*:before,a,button,canvas,g,h1,h2,h3,h4,h5,h6,image,img,input,li,p,path,svg,ul,textarea,blockquote': {
    backgroundColor: 'transparent',
    border: 'none',
    boxSizing: 'border-box',
    cursor: 'default',
    fontFamily: "'Graphik'",
    listStyle: 'none',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    position: 'relative',
  },
  'textarea::-webkit-input-placeholder, input::-webkit-input-placeholder': {
    fontFamily: 'inherit',
  },
  'button:focus,input:focus,textarea:focus,button:active,input:active,textarea:active': {
    border: 0,
    outline: 0,
    outlineOffset: 0,
  },
  'input, textarea': {
    cursor: 'text',
  },
  img: {
    display: 'block',
  },
  '@font-face': [
    {
      src: "url('client/assets/fonts/Graphik-Regular.otf') format('otf')",
      fontFamily: 'Graphik',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    {
      src: "url('client/assets/fonts/Graphik-Medium.otf') format('otf')",
      fontFamily: 'Graphik',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      src: "url('client/assets/fonts/Graphik-Bold.otf') format('otf')",
      fontFamily: 'Graphik',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  ],
});
