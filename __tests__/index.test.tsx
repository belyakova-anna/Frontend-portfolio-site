import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../pages/index';

describe('Component About', () => {
  test('displays the users image with the correct alt text', () => {
    render(<About />);
    const userImageElement = screen.getByAltText('Image');
    expect(userImageElement).toBeInTheDocument();
  });

  test('displays location information with correct text', () => {
    render(<About />);
    const locationInfoElement = screen.getByText('Innopolis, Russia');
    expect(locationInfoElement).toBeInTheDocument();
  });

  test('displays a component with user information', () => {
    render(<About />);
    const userInfoElement = screen.getByTestId('user-info');
    expect(userInfoElement).toBeInTheDocument();
  });
});
