import 'jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import StatePropFlow from '../index';

afterEach(cleanup);

const App = () => <StatePropFlow />;

test('click button to increase count', () => {
  const {getByText} = render(<App />);
  const num = getByText('0');
  const btn = getByText('Click me');

  fireEvent.click(btn);
  expect(num.innerHTML).toBe('1');
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(num.innerHTML).toBe('3');
});
