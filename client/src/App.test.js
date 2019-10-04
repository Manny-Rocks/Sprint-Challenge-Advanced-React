import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar';
import * as rtl from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('NavBar renders without crashing', () => {
  const { getByText } = render(<NavBar />)
  getByText("MANNY'S SOCCER CARDS")
})

