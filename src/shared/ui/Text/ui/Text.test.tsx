import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { screen } from '@testing-library/react';
import cls from './Text.module.scss';

describe('Text.test', () => {
    test('render default Text with title and text', () => {
        componentRender(<Text title="Title" text="Text" />);

        const text = screen.getByTestId('text');

        expect(text).toHaveTextContent('Title');
        expect(text).toHaveTextContent('Text');
        expect(text).toHaveClass(cls[TextTheme.PRIMARY]);
    });

    test('render default Text only title', () => {
        componentRender(<Text title="Title" />);

        const text = screen.getByTestId('text');

        expect(text).toHaveTextContent('Title');
        expect(text).not.toHaveTextContent('Text');
    });

    test('render default Text only text', () => {
        componentRender(<Text text="Text" />);

        const text = screen.getByTestId('text');

        expect(text).not.toHaveTextContent('Title');
        expect(text).toHaveTextContent('Text');
    });

    test('render error Text with title and text', () => {
        componentRender(<Text title="Title" text="Text" theme={TextTheme.ERROR} />);

        const text = screen.getByTestId('text');

        expect(text).toHaveTextContent('Title');
        expect(text).toHaveTextContent('Text');
        expect(text).toHaveClass(cls[TextTheme.ERROR]);
    });

    test('render Text with custom classname', () => {
        componentRender(<Text title="Title" text="Text" className="custom" />);

        const text = screen.getByTestId('text');

        expect(text).toHaveClass('custom');
    });
});
