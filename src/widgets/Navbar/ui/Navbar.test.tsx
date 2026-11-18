import { fireEvent, render, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
    test('renders Navbar', () => {
        componentRender(
            <Navbar />,
        );

        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    test('renders Navbar with custom className', () => {
        componentRender(
            <Navbar className="custom" />,
        );

        expect(screen.getByTestId('navbar')).toHaveClass('custom');
    });

    test('opens LoginModal after clicking the login button', () => {
        componentRender(<Navbar />);

        expect(screen.queryByTestId('login-form')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Войти' }));

        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });
});
