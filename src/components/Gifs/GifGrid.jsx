import PropTypes from 'prop-types';

import { GifItem } from './GifItem';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { SkeletonCard } from '../SkeletonCard/SkeletonCard';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading ? (
				<div style={{ display: 'flex', gap: '16px' }}>
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
			) : (
				<div className="card-grid">
					{images.map((image) => (
						<GifItem key={image.id} {...image} />
					))}
				</div>
			)}
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
