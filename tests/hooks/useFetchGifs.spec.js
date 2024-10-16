import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {
	const category = 'Pokemon';

	it('should return initial state', () => {
		const { result } = renderHook(() => useFetchGifs(category));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	it('should return an array of image and isLoading in false', async () => {
		const { result } = renderHook(() => useFetchGifs(category));
		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);

		const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
