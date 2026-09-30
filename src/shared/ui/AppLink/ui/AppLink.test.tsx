import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';

import cls from 'shared/ui/AppLink/ui/AppLink.module.scss';
import { userEvent } from '@storybook/testing-library';
import { AppLink, AppLinkTheme } from './AppLink';

const TestComponent = () => {
    const location = useLocation();

    return <div data-testid="location">{location.pathname}</div>;
};

describe('AppLink', () => {
    test('render AppLink by default', () => {
        render(
            <MemoryRouter>
                <AppLink to="/">
                    Text
                </AppLink>
            </MemoryRouter>,
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
        expect(link).toHaveTextContent('Text');
        expect(link).toHaveClass(cls[AppLinkTheme.PRIMARY]);
    });

    test('renders AppLink with custom classname', () => {
        render(
            <MemoryRouter>
                <AppLink to="/" className="custom">
                    Text
                </AppLink>
            </MemoryRouter>,
        );
        expect(screen.getByRole('link')).toHaveClass('custom');
    });

    test('renders AppLink with SECONDARY theme', () => {
        render(
            <MemoryRouter>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    Text
                </AppLink>
            </MemoryRouter>,
        );
        expect(screen.getByRole('link')).toHaveClass(cls[AppLinkTheme.SECONDARY]);
    });

    test('renders AppLink with other props', () => {
        render(
            <MemoryRouter>
                <AppLink to="/" target="_blank" download="document.pdf">
                    Text
                </AppLink>
            </MemoryRouter>,
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('download', 'document.pdf');
    });

    test('navigates to About after click on AppLink', () => {
        render(
            <MemoryRouter>
                <AppLink to="/about">
                    About
                </AppLink>
                <TestComponent />
            </MemoryRouter>,
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/about');
        expect(link).toHaveTextContent('About');

        userEvent.click(link);

        expect(screen.getByTestId('location')).toHaveTextContent('/about');
    });
});
