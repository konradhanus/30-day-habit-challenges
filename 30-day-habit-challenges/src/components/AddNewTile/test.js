import React from 'react';
import ReactDOM from 'react-dom';
import AddNewTile from './';

it('Add new tile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewTile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
