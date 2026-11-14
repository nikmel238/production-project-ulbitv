import { render, screen } from '@testing-library/react';
import cls from './NotFoundPage.module.scss';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
    test('render NotFoundPage', () => {
        render(<NotFoundPage />);

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
        expect(screen.getByTestId('not-found-page')).toHaveClass(cls.NotFoundPage);
    });

    test('render NotFoundPage with custom className', () => {
        render(<NotFoundPage className="custom" />);

        expect(screen.getByTestId('not-found-page')).toHaveClass('custom');
    });
});
