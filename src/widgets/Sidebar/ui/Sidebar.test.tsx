import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggles collapsed state after clicking the button', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(toggleBtn);

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);

        expect(sidebar).not.toHaveClass('collapsed');
    });
});
