import React from 'react';
import ReactDOM from 'react-dom';
import Sdc from './Sdc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sdc />, div);
  ReactDOM.unmountComponentAtNode(div);
});
