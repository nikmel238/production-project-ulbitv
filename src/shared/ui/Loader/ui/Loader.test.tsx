import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    test('render Loader', () => {
        render(<Loader />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();
        expect(screen.getByTestId('loader')).toHaveClass('lds-roller');
    });

    test('render Loader with custom className', () => {
        render(<Loader className="custom" />);

        expect(screen.getByTestId('loader')).toHaveClass('custom');
    });
});
