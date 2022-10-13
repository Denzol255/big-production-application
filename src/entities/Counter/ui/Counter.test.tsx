import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from 'shared/lib/getClassNames/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

jest.mock('axios');

describe('Counter', () => {
  test('In document', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 1 } } });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('Toggle increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 0 } } });
    const toggleBtn = screen.getByTestId('counter-increment');
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('Toggle decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 0 } } });
    const toggleBtn = screen.getByTestId('counter-decrement');
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    userEvent.click(toggleBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });
});
