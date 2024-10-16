import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { useFetchGifs } from '../src/hooks/useFetchGifs';
import { imagesMock, imagesSecondMock } from './mocks/images.mock';

jest.mock('../src/hooks/useFetchGifs');

describe('GifExpertApp', () => {
	const defaultCategory = 'Pokemon';
	const inputValue = 'Digimon';

	beforeEach(() => {
		useFetchGifs.mockReturnValue({ images: imagesMock, isLoading: false });
	});

	afterEach(() => jest.clearAllMocks());

	it('should show gifs', async () => {
		render(<GifExpertApp />);
		expect(screen.getByText(defaultCategory)).toBeDefined();
	});

	it('should add category', async () => {
		render(<GifExpertApp />);
		expect(screen.getByText(defaultCategory)).toBeDefined();

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		useFetchGifs.mockReturnValueOnce({
			images: imagesSecondMock,
			isLoading: false,
		});
		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(screen.getByText(inputValue)).toBeDefined();
	});

	it('should not add duplicate category', async () => {
		render(<GifExpertApp />);
		expect(screen.getByText(defaultCategory)).toBeDefined();

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		fireEvent.input(input, { target: { value: defaultCategory } });
		fireEvent.submit(form);

		expect(useFetchGifs).toHaveBeenCalledTimes(1);
	});
});
