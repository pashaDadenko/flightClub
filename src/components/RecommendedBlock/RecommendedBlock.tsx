import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetSneakersQuery } from '../../redux/api/api';

import styles from './RecommendedBlock.module.scss';

export const RecommendedBlock: FC = () => {
	const { data = [] } = useGetSneakersQuery('');

	const brand = useSelector((state: RootState) => state.sneakersSlice.brand);
	const recommendedSneakers = data.filter((item) => item.brand === brand).slice(0, 8);

	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<h2 className={styles.title}>RECOMMENDED FOR YOU</h2>
				<ul className={styles.previewGroupe}>
					{recommendedSneakers &&
						recommendedSneakers.map((sneaker) => (
							<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct} onClick={() => window.scrollTo(0, 0)}>
								<img className={styles.img} src={sneaker.images[0]} alt='image' />
								<div className={styles.info}>
									<span className={styles.subTitle}>{sneaker.brand}</span>
									<p className={styles.text}>{sneaker.title}</p>
								</div>
							</Link>
						))}
				</ul>
			</section>
		</div>
	);
};
