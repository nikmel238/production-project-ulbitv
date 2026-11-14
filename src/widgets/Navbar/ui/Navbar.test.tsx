import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
    test('renders Navbar', () => {
        render(
            <Navbar />,
        );

        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    test('renders Navbar with custom className', () => {
        render(
            <Navbar className="custom" />,
        );

        expect(screen.getByTestId('navbar')).toHaveClass('custom');
    });

    test('opens LoginModal after clicking the login button', () => {
        render(<Navbar />);

        expect(screen.queryByTestId('login-form')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Войти' }));

        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });
});
