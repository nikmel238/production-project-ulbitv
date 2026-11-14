import {
    act, fireEvent, render, screen,
} from '@testing-library/react';
import { Modal } from './Modal';
import cls from './Modal.module.scss';

describe('Modal', () => {
    test('renders opened Modal with children', () => {
        render(
            <Modal isOpen>
                <button type="button">Modal content</button>
            </Modal>,
        );

        const modal = screen.getByTestId('modal');

        expect(screen.getByText('Modal content')).toBeInTheDocument();
        expect(modal).toHaveClass(cls.opened);
        expect(modal).not.toHaveClass(cls.isClosing);
    });

    test('does not close when clicking inside the modal', () => {
        jest.useFakeTimers();

        const onClose = jest.fn();

        try {
            render(
                <Modal isOpen onClose={onClose}>
                    <button type="button">Modal content</button>
                </Modal>,
            );

            fireEvent.click(
                screen.getByRole('button', { name: 'Modal content' }),
            );

            expect(screen.getByTestId('modal')).not.toHaveClass(cls.isClosing);

            act(() => {
                jest.advanceTimersByTime(300);
            });

            expect(onClose).not.toHaveBeenCalled();
        } finally {
            jest.useRealTimers();
        }
    });

    test('click on overlay closes Modal', () => {
        jest.useFakeTimers();
        const onClose = jest.fn();

        try {
            render(
                <Modal isOpen onClose={onClose}>
                    <button type="button">Modal content</button>
                </Modal>,
            );

            const overlay = screen.getByTestId('modal-overlay');
            const modal = screen.getByTestId('modal');

            fireEvent.click(overlay);

            expect(modal).toHaveClass(cls.isClosing);
            expect(onClose).not.toHaveBeenCalled();

            act(() => {
                jest.advanceTimersByTime(300);
            });

            expect(modal).not.toHaveClass(cls.isClosing);
            expect(onClose).toHaveBeenCalledTimes(1);
        } finally {
            jest.useRealTimers();
        }
    });

    test('press Escape closes Modal', () => {
        jest.useFakeTimers();
        const onClose = jest.fn();

        try {
            render(
                <Modal isOpen onClose={onClose}>
                    <button type="button">Modal content</button>
                </Modal>,
            );

            const modal = screen.getByTestId('modal');

            fireEvent.keyDown(window, { key: 'Escape' });

            expect(modal).toHaveClass(cls.isClosing);
            expect(onClose).not.toHaveBeenCalled();

            act(() => {
                jest.advanceTimersByTime(300);
            });

            expect(modal).not.toHaveClass(cls.isClosing);
            expect(onClose).toHaveBeenCalledTimes(1);
        } finally {
            jest.useRealTimers();
        }
    });

    test('render lazy Modal', () => {
        const { rerender } = render(
            <Modal lazy isOpen={false}>
                <button type="button">Modal content</button>
            </Modal>,
        );

        expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

        rerender(
            <Modal lazy isOpen>
                <button type="button">Modal content</button>
            </Modal>,
        );

        expect(screen.getByTestId('modal')).toBeInTheDocument();

        rerender(
            <Modal lazy isOpen={false}>
                <button type="button">Modal content</button>
            </Modal>,
        );

        const modal = screen.getByTestId('modal');

        expect(modal).toBeInTheDocument();
        expect(modal).not.toHaveClass(cls.opened);
        expect(modal).not.toHaveClass(cls.isClosing);
    });

    test('clears timeout on unmount', () => {
        jest.useFakeTimers();
        const onClose = jest.fn();

        try {
            const { unmount } = render(
                <Modal isOpen onClose={onClose}>
                    <button type="button">Modal content</button>
                </Modal>,
            );

            const overlay = screen.getByTestId('modal-overlay');

            fireEvent.click(overlay);

            unmount();

            act(() => {
                jest.advanceTimersByTime(300);
            });
            expect(onClose).not.toHaveBeenCalled();
        } finally {
            jest.useRealTimers();
        }
    });
});
