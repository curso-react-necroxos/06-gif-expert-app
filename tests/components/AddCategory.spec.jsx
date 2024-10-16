import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('AddCategory', () => {
	it('should change input value', () => {
		const inputValue = 'Pokemon';

		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('');

		fireEvent.input(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);
	});

	it('should call "onNewCategory" on submit', () => {
		const inputValue = 'Saitama';
		const spyOnNewCategory = jest.fn();

		render(<AddCategory onNewCategory={spyOnNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(spyOnNewCategory).toHaveBeenCalledTimes(1);
		expect(spyOnNewCategory).toHaveBeenCalledWith(inputValue);
	});

  it('should not call "onNewCategory" on submit', () => {
		const inputValue = 'a';
		const spyOnNewCategory = jest.fn();

		render(<AddCategory onNewCategory={spyOnNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(spyOnNewCategory).toHaveBeenCalledTimes(0);
	});
});
