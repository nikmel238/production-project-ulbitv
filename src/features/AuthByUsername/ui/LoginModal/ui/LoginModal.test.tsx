import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
    test('renders LoginModal', () => {
        const onClose = jest.fn();

        componentRender(<LoginModal isOpen onClose={onClose} />);

        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    test('renders LoginModal with custom className', () => {
        const onClose = jest.fn();

        componentRender(<LoginModal isOpen onClose={onClose} className="custom" />);

        expect(screen.getByTestId('modal')).toHaveClass('custom');
    });
});
