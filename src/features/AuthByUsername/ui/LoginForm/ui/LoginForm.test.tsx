import { render, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('renders LoginForm', () => {
        componentRender(
            <LoginForm />,
        );

        const inputs = document.querySelectorAll('input');

        expect(screen.getByTestId('login-form')).toBeInTheDocument();
        expect(inputs).toHaveLength(2);
        expect(inputs[0]).toHaveAttribute('type', 'text');
        expect(inputs[1]).toHaveAttribute('type', 'password');
        expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
    });

    test('renders LoginForm with custom className', () => {
        componentRender(
            <LoginForm className="custom" />,
        );

        expect(screen.getByTestId('login-form')).toHaveClass('custom');
    });

    test('focuses login input on mount', () => {
        componentRender(<LoginForm />);
        const inputs = document.querySelectorAll('input');

        expect(inputs[0]).toHaveFocus();
    });
});
