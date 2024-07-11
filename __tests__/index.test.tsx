// __tests__/index.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/index';

describe('About component', () => {
  test('renders user image with correct alt text', () => {
    const { getByAltText } = render(<About />);

    const userImageElement = getByAltText('Image');
    expect(userImageElement).toBeTruthy();
  });

  test('renders location info with correct location', () => {
    const { getByText } = render(<About />);

    const locationInfoElement = getByText('Innopolis, Russia');
    expect(locationInfoElement).toBeTruthy();
  });

  test('renders user info component', () => {
    const { getByTestId } = render(<About />);

    const userInfoElement = getByTestId('user-info');
    expect(userInfoElement).toBeTruthy();
  });
});
