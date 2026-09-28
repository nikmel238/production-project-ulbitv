import React, { useEffect } from 'react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

const ThemeDecorator = (
    { theme, children }: { theme: Theme; children: React.ReactNode },
) => {
    useEffect(() => {
        const { body } = document;

        body.classList.remove(Theme.LIGHT, Theme.DARK);
        body.classList.add(theme);

        return () => {
            body.classList.remove(Theme.DARK, Theme.LIGHT);
            body.classList.add(Theme.LIGHT);
        };
    }, [theme]);

    return (
        <ThemeProvider initialTheme={theme}>
            <div className="app">
                {children}
            </div>
        </ThemeProvider>
    );
};

export const withDarkTheme = (Story: Story) => (
    <ThemeDecorator theme={Theme.DARK}>
        <Story />
    </ThemeDecorator>
);
