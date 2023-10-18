import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './TopSellersBlock.module.scss';

export const TopSellersBlock: FC = () => {
	const topSellers = useSelector((state: RootState) => state.sneakersSlice.topSellersSneakers);

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
				<Link className={styles.link} to={'/top-sellers'}>
					<button className={styles.btn}>SHOP TOP SELLERS</button>
				</Link>
			</div>
		</div>
	);
};
