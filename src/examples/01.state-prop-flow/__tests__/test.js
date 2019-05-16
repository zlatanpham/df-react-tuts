import 'jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import StatePropFlow from '../index';

const App = () => <StatePropFlow />;

test('click button to increase count', () => {
  const { getByText } = render(<App />);
  const num = getByText('0');
  const btn = getByText('Click me');

  fireEvent.click(btn);
  expect(num.innerHTML).toBe('1');
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(num.innerHTML).toBe('3');
});

afterEach(cleanup);

test('click panels should not increase count', () => {
  const { getByText } = render(<App />);
  const num = getByText('0');

  const lv1Heading = getByText('Level 1').parentElement;
  fireEvent.click(lv1Heading);
  expect(num.innerHTML).toBe('0');
  const lv2Heading = getByText('Level 2').parentElement;
  fireEvent.click(lv2Heading);
  expect(num.innerHTML).toBe('0');
  const lv3Heading = getByText('Level 3').parentElement;
  fireEvent.click(lv3Heading);
  expect(num.innerHTML).toBe('0');
});
