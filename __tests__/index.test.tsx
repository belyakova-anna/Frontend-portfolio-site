import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../pages/index';

describe('Компонент About', () => {
  test('отображает изображение пользователя с корректным alt текстом', () => {
    render(<About />);
    const userImageElement = screen.getByAltText('Image');
    expect(userImageElement).toBeInTheDocument();
  });

  test('отображает информацию о местоположении с корректным текстом', () => {
    render(<About />);
    const locationInfoElement = screen.getByText('Innopolis, Russia');
    expect(locationInfoElement).toBeInTheDocument();
  });

  test('отображает компонент с информацией о пользователе', () => {
    render(<About />);
    const userInfoElement = screen.getByTestId('user-info');
    expect(userInfoElement).toBeInTheDocument();
  });
});
