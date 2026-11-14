import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import MainPage from './MainPage';

describe('MainPage', () => {
    test('renders MainPage ', () => {
        componentRender(<MainPage />);

        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        expect(screen.getByText('Главная страница')).toBeInTheDocument();
    });
});
