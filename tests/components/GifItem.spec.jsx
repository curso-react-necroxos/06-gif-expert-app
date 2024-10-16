import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem', () => {
	const title = 'Pokemon';
	const url = 'http://some-url.com/pokemon';

	it('should match to snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	it('should render img with URL and ALT', () => {
		render(<GifItem title={title} url={url} />);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	it('should render title', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
