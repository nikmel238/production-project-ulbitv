import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from 'shared/ui/Input';

describe('Input', () => {
    test('render Input', () => {
        render(<Input />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('renders Input without props', () => {
        render(<Input />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('type', 'text');
        expect(screen.queryByTestId('input-placeholder')).not.toBeInTheDocument();
    });

    test('render Input with placeholder', () => {
        render(<Input placeholder="Enter text" />);
        const placeholderEl = screen.getByTestId('input-placeholder');
        expect(placeholderEl).toBeInTheDocument();
    });

    test('render Input with prop - className', () => {
        render(<Input className="custom" />);
        const placeholderEl = screen.getByTestId('input');
        expect(placeholderEl).toHaveClass('custom');
    });

    test('renders caret when input is focused', () => {
        render(<Input value="" />);
        const input = screen.getByRole('textbox');
        expect(screen.queryByTestId('input-caret')).not.toBeInTheDocument();
        fireEvent.focus(input);
        expect(screen.getByTestId('input-caret')).toBeInTheDocument();
    });

    test('calls onChange with typed value', () => {
        const handleChange = jest.fn();
        render(<Input value="" onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Hello' } });

        expect(handleChange).toHaveBeenCalledWith('Hello');
    });

    test('calls onChange with empty string when input is cleared', () => {
        const handleChange = jest.fn();
        render(<Input value="Text" onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '' } });

        expect(handleChange).toHaveBeenCalledWith('');
    });

    test('hides caret on blur', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');

        fireEvent.focus(input);
        expect(screen.getByTestId('input-caret')).toBeInTheDocument();

        fireEvent.blur(input);
        expect(screen.queryByTestId('input-caret')).not.toBeInTheDocument();
    });

    test('moves caret position based on input length', () => {
        render(<Input value="" />);
        const input = screen.getByRole('textbox');

        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: 'abc' } });

        // caretPosition = 3, left = 3 * 9 = 27px
        const caret = screen.getByTestId('input-caret');
        expect(caret).toHaveStyle({ left: '27px' });
    });

    test('handles undefined value without crashing', () => {
        render(<Input onChange={() => {}} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('passes through additional HTML attributes', () => {
        render(<Input disabled readOnly maxLength={10} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeDisabled();
        expect(input).toHaveAttribute('readonly');
        expect(input).toHaveAttribute('maxlength', '10');
    });

    test('autofocus focuses input on mount', () => {
        render(<Input autofocus />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveFocus();
    });
});
