import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// test('renders App', () => {
//   render(<App />);
// });

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /how it works/i });
    // screen.debug(link);
    userEvent.click(link);
  });
});
