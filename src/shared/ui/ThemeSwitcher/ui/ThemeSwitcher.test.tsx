import { fireEvent, render, screen } from '@testing-library/react';
import * as useThemeModule from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

jest.mock('app/providers/ThemeProvider');

const mockToggleTheme = jest.fn();
const mockUseTheme = useThemeModule.useTheme as jest.MockedFunction<typeof useThemeModule.useTheme>;

beforeEach(() => {
    mockToggleTheme.mockClear();
    mockUseTheme.mockReturnValue({
        theme: Theme.LIGHT,
        toggleTheme: mockToggleTheme,
    });
});

describe('ThemeSwitcher', () => {
    test('render ThemeSwitcher', () => {
        render(
            <ThemeSwitcher />,
        );

        expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
    });

    test('render ThemeSwitcher with custom className', () => {
        render(<ThemeSwitcher className="custom" />);

        expect(screen.getByTestId('theme-switcher')).toHaveClass('custom');
    });

    test('calls toggleTheme on click', () => {
        render(<ThemeSwitcher />);
        fireEvent.click(screen.getByTestId('theme-switcher'));
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });

    test('renders correct icon based on theme', () => {
        const { rerender } = render(<ThemeSwitcher />);

        expect(screen.getByTestId('icon-light')).toBeInTheDocument();
        expect(screen.queryByTestId('icon-dark')).not.toBeInTheDocument();

        mockUseTheme.mockReturnValue({
            theme: Theme.DARK,
            toggleTheme: mockToggleTheme,
        });

        rerender(<ThemeSwitcher />);

        expect(screen.queryByTestId('icon-light')).not.toBeInTheDocument();
        expect(screen.getByTestId('icon-dark')).toBeInTheDocument();
    });
});
