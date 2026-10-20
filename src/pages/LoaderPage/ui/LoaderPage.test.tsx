import { render, screen } from '@testing-library/react';
import cls from './LoaderPage.module.scss';
import { LoaderPage } from './LoaderPage';

describe('LoaderPage', () => {
    test('render LoaderPage', () => {
        render(<LoaderPage />);

        expect(screen.getByTestId('loader-page')).toBeInTheDocument();
        expect(screen.getByTestId('loader-page')).toHaveClass(cls.LoaderPage);
    });

    test('render LoaderPage with custom className', () => {
        render(<LoaderPage className="custom" />);

        expect(screen.getByTestId('loader-page')).toHaveClass('custom');
    });
});
