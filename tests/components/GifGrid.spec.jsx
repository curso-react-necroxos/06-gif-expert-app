import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/Gifs/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { imagesMock } from '../mocks/images.mock';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
	const category = 'Pokemon';

	it('should show Skeleton first', () => {
		useFetchGifs.mockReturnValue({ images: [], isLoading: true });
		const { container } = render(<GifGrid category={category} />);
		const skeletonCards = container.querySelectorAll('.skeleton-card');

		expect(skeletonCards.length).toBeGreaterThanOrEqual(3);
		expect(container).toMatchSnapshot();
	});

	it('should show gifs', () => {
		useFetchGifs.mockReturnValue({ images: imagesMock, isLoading: false });

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
