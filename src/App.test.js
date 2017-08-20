import React, {Component} from 'react';
import './App.css';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
