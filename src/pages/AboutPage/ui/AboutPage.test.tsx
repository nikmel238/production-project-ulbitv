import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

describe('AboutPage', () => {
    test('renders AboutPage ', () => {
        componentRender(<AboutPage />);

        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        expect(screen.getByText('О сайте')).toBeInTheDocument();
    });
});
