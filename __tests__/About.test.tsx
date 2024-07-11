import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../pages/index';

describe('About component', () => {
  test('renders user image with correct src and alt', () => {
    const { getByAltText } = render(<About />);

    const userImageElement = getByAltText('Image');
    expect(userImageElement).toBeInTheDocument();
    expect(userImageElement.getAttribute('src')).toBe(
      'https://i.postimg.cc/25YZmKhR/me.png',
    );
  });

  test('renders location info with correct location', () => {
    const { getByText } = render(<About />);

    const locationInfoElement = getByText('Innopolis, Russia');
    expect(locationInfoElement).toBeInTheDocument();
  });

  test('renders user info component', () => {
    const { getByTestId } = render(<About />);

    const userInfoElement = getByTestId('user-info');
    expect(userInfoElement).toBeInTheDocument();
  });
});
