import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Импорт Jest DOM Matchers
import About from '../pages/index'; // Путь к вашему компоненту

describe('About component', () => {
  test('renders user image with correct src and alt', () => {
    const { getByAltText } = render(<About />);

    // Проверяем, что компонент UserImage успешно отрендерился с заданным src и alt
    const userImageElement = getByAltText('Image');
    expect(userImageElement).toBeInTheDocument();
    expect(userImageElement.getAttribute('src')).toBe(
      'https://i.postimg.cc/25YZmKhR/me.png'
    );
  });

  test('renders location info with correct location', () => {
    const { getByText } = render(<About />);

    // Проверяем, что компонент LocationInfo успешно отрендерился с заданным текстом местоположения
    const locationInfoElement = getByText('Innopolis, Russia');
    expect(locationInfoElement).toBeInTheDocument();
  });

  test('renders user info component', () => {
    const { getByTestId } = render(<About />);

    // Проверяем, что компонент UserInfo отрендерился (мы используем getByTestId, предполагая, что UserInfo возвращает элемент с data-testid)
    const userInfoElement = getByTestId('user-info');
    expect(userInfoElement).toBeInTheDocument();
  });
});
