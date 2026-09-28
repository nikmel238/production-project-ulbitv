import { Button } from 'shared/ui/Button';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonSize, ButtonTheme } from './Button';
import cls from './Button.module.scss';

describe('Button', () => {
    test('render Button with children', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render Button by default', () => {
        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeEmptyDOMElement();
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
        expect(screen.getByRole('button')).toHaveClass(cls[ButtonSize.M]);
    });

    test('Clear team', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByRole('button')).toHaveClass(cls[ButtonTheme.CLEAR]);
    });

    test('render Button with square prop', () => {
        render(<Button square>TEST</Button>);
        expect(screen.getByRole('button')).toHaveClass(cls.square);
    });

    test('render Button with prop size L', () => {
        render(<Button size={ButtonSize.L}>TEST</Button>);
        expect(screen.getByRole('button')).toHaveClass(cls[ButtonSize.L]);
        expect(screen.getByRole('button')).not.toHaveClass(cls[ButtonSize.M]);
    });

    test('render Button with prop className', () => {
        render(<Button className="custom">TEST</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom');
    });

    test('render Button with other prop - disabled', () => {
        render(<Button disabled>TEST</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('render Button with other prop and passes onClick handler', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>TEST</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
