import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import { useGetSneakersQuery } from '../../redux/api/api';

import styles from './TopSellersBlock.module.scss';

export const TopSellersBlock: FC = () => {
	const { data = [] } = useGetSneakersQuery('');

	const topSellers = data.slice(0, 8).sort((a, b) => b.rating - a.rating);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>TOP SELLERS</h2>
				<ul className={styles.previewGroupe}>
					{topSellers &&
						topSellers.map((sneaker) => (
							<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
								<img className={styles.img} src={sneaker.images[0]} alt='image' />
								<div className={styles.info}>
									<span className={styles.subTitle}>{sneaker.brand}</span>
									<p className={styles.text}>{sneaker.title}</p>
								</div>
							</Link>
						))}
				</ul>
				<Link className={styles.link} to={PATHS.TOP_SELLERS}>
					<button className={styles.btn}>SHOP TOP SELLERS</button>
				</Link>
			</div>
		</div>
	);
};
