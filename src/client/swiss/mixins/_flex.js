import { addMixin } from 'swiss-react';

addMixin('flex', (direction, horizontal, vertical) => {
  const flex = {};
  flex.display = 'flex';

  if (direction === 'center') {
    flex.justifyContent = 'center';
    flex.alignItems = 'center';
  }

  if (direction === 'row') {
    flex.flexDirection = direction;

    switch (horizontal) {
      case 'left':
        flex.justifyContent = 'flex-start';
        break;
      case 'center':
        flex.justifyContent = 'center';
        break;
      case 'end':
        flex.justifyContent = 'flex-end';
        break;
      case 'between':
        flex.justifyContent = 'space-between';
        break;
      case 'around':
        flex.justifyContent = 'space-around';
        break;
      default:
        flex.justifyContent = 'flex-start';
    }

    switch (vertical) {
      case 'top':
        flex.alignItems = 'flex-start';
        break;
      case 'center':
        flex.alignItems = 'center';
        break;
      case 'bottom':
        flex.alignItems = 'flex-end';
        break;
      case 'stretch':
        flex.alignItems = 'stretch';
        break;
      default:
        flex.alignItems = 'flex-start';
    }
  }

  if (direction === 'column') {
    flex.flexDirection = direction;

    switch (horizontal) {
      case 'start':
        flex.alignItems = 'flex-start';
        break;
      case 'center':
        flex.alignItems = 'center';
        break;
      case 'end':
        flex.alignItems = 'flex-end';
        break;
      default:
        flex.alignItems = 'flex-start';
    }

    switch (vertical) {
      case 'top':
        flex.justifyContent = 'flex-start';
        break;
      case 'center':
        flex.justifyContent = 'center';
        break;
      case 'bottom':
        flex.justifyContent = 'flex-end';
        break;
      case 'between':
        flex.justifyContent = 'space-between';
        break;
      case 'around':
        flex.justifyContent = 'space-around';
        break;
      default:
        flex.justifyContent = 'flex-start';
    }
  }

  if (direction === 'column-reverse') {
    flex.flexDirection = direction;

    switch (horizontal) {
      case 'left':
        flex.alignItems = 'flex-start';
        break;
      case 'center':
        flex.alignItems = 'center';
        break;
      case 'right':
        flex.alignItems = 'flex-end';
        break;
      default:
        flex.alignItems = 'flex-start';
    }

    switch (vertical) {
      case 'top':
        flex.justifyContent = 'flex-start';
        break;
      case 'center':
        flex.justifyContent = 'center';
        break;
      case 'bottom':
        flex.justifyContent = 'flex-end';
        break;
      case 'between':
        flex.justifyContent = 'space-between';
        break;
      case 'around':
        flex.justifyContent = 'space-around';
        break;
      default:
        flex.justifyContent = 'flex-start';
    }
  }

  if (direction === 'row-reverse') {
    flex.flexDirection = direction;

    switch (horizontal) {
      case 'left':
        flex.justifyContent = 'flex-start';
        break;
      case 'center':
        flex.justifyContent = 'center';
        break;
      case 'right':
        flex.justifyContent = 'flex-end';
        break;
      case 'between':
        flex.justifyContent = 'space-between';
        break;
      case 'around':
        flex.justifyContent = 'space-around';
        break;
      default:
        flex.justifyContent = 'flex-start';
    }

    switch (vertical) {
      case 'top':
        flex.alignItems = 'flex-start';
        break;
      case 'center':
        flex.alignItems = 'center';
        break;
      case 'bottom':
        flex.alignItems = 'flex-end';
        break;
      case 'stretch':
        flex.alignItems = 'stretch';
        break;
      default:
        flex.alignItems = 'flex-start';
    }
  }

  return { ...flex };
});
