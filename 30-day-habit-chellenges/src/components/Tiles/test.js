import React from 'react';
import ReactDOM from 'react-dom';
import Tiles from './';

it('Tiles renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tiles />, div);
  ReactDOM.unmountComponentAtNode(div);
});
