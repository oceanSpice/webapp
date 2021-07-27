import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders oceanSPICE title', () => {
  render(<App />);
  const linkElement = screen.getByText(/oceanSPICE/i);
  expect(linkElement).toBeInTheDocument();
});
