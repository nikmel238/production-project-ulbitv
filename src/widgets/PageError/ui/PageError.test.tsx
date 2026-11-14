import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { PageError } from './PageError';
import { reloadPage } from './reloadPage';

jest.mock('./reloadPage', () => ({
    reloadPage: jest.fn(),
}));

describe('PageError', () => {
    test('renders PageError', () => {
        render(<PageError />);
        expect(screen.getByTestId('page-error')).toBeInTheDocument();
    });

    test('renders PageError with custom className', () => {
        render(<PageError className="custom" />);
        expect(screen.getByTestId('page-error')).toHaveClass('custom');
    });

    test('reloads page after clicking the button', () => {
        render(<PageError />);

        userEvent.click(screen.getByRole('button', { name: 'Обновить страницу' }));

        expect(reloadPage).toHaveBeenCalledTimes(1);
    });
});
