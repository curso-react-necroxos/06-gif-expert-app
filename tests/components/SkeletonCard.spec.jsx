import { render } from '@testing-library/react';
import { SkeletonCard } from '../../src/components';

describe('SkeletonCard', () => {
	it('should match to snapshot', () => {
		const { container } = render(<SkeletonCard />);

		expect(container).toMatchSnapshot();
		expect(container.querySelectorAll('.skeleton-card')).toBeDefined();
	});
});
