import { render, screen } from '@testing-library/react';
import { ButtonTheme } from 'shared/ui/Button';
import { userEvent } from '@storybook/testing-library';
import i18n from 'shared/config/i18n/i18nForTests';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('render LangSwitcher by default', () => {
        render(<LangSwitcher />);
        const langSwitcher = screen.getByRole('button');
        expect(langSwitcher).toBeInTheDocument();
        expect(langSwitcher).toHaveClass(ButtonTheme.CLEAR_INVERTED);
    });

    test('render short LangSwitcher', () => {
        render(<LangSwitcher long={false} />);
        expect(screen.getByText('Язык')).toBeInTheDocument();
    });

    test('render long LangSwitcher', () => {
        render(<LangSwitcher long />);
        expect(screen.getByText('Короткий язык')).toBeInTheDocument();
    });

    test('render LangSwitcher with custom className', () => {
        render(<LangSwitcher className="custom" />);
        expect(screen.getByRole('button')).toHaveClass('custom');
    });

    describe('LangSwitcher', () => {
        afterEach(() => {
            i18n.changeLanguage('ru');
        });

        test('changes language on click', () => {
            render(<LangSwitcher />);

            const button = screen.getByRole('button');

            expect(i18n.language).toBe('ru');

            userEvent.click(button);

            expect(i18n.language).toBe('en');
        });
    });
});
