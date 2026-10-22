import { render, screen } from '@testing-library/react';
import { Portal } from './Portal';

describe('Portal', () => {
    test('render Portal without element prop', () => {
        render(
            <Portal>
                <div data-testid="portal-content">TEST</div>
            </Portal>,
        );

        const elementContent = screen.getByTestId('portal-content');

        expect(elementContent).toBeInTheDocument();
        expect(document.body).toContainElement(elementContent);
    });

    test('render Portal with element prop', () => {
        const elementParent = document.createElement('div');
        document.body.appendChild(elementParent);

        try {
            render(
                <Portal element={elementParent}>
                    <div data-testid="portal-content">TEST</div>
                </Portal>,
            );

            const elementContent = screen.getByTestId('portal-content');

            expect(elementParent).toContainElement(elementContent);
        } finally {
            elementParent.remove();
        }
    });
});
