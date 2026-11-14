import { render, screen } from '@testing-library/react';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
    test('renders LoginModal', () => {
        const onClose = jest.fn();

        render(<LoginModal isOpen onClose={onClose} />);

        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    test('renders LoginModal with custom className', () => {
        const onClose = jest.fn();

        render(<LoginModal isOpen onClose={onClose} className="custom" />);

        expect(screen.getByTestId('modal')).toHaveClass('custom');
    });
});
