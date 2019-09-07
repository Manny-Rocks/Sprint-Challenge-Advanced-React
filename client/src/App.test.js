import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import NavBar from './components/NavBar';

test('NavBar renders without crashing', () => {
  const { getByText } = render(<NavBar />)
  getByText("MANNY'S SOCCER CARDS")
})

test('clicking the toggle button actually changes class to dark mode', () => {
  const { getByTestId } = rtl.render(<NavBar />)
  const darkToggleButton = getByTestId('darkToggleButton')
  expect(darkToggleButton.classList.contains('toggled')).toBe(false)
  fireEvent.click(darkToggleButton)
  expect(darkToggleButton.classList.contains('toggled')).toBe(true)
})

