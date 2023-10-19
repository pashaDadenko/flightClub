import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './OffWhiteBlock.module.scss';

export const OffWhiteBlock: FC = () => {
	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const offWhite = allSneakers.filter((item) => item.brand === 'Off-white').slice(0, 8);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>OFF WHITE</h2>
				<ul className={styles.previewGroupe}>
					{offWhite &&
						offWhite.map((sneaker) => (
							<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
								<img className={styles.img} src={sneaker.images[0]} alt='image' />
								<div className={styles.info}>
									<span className={styles.subTitle}>{sneaker.brand}</span>
									<p className={styles.text}>{sneaker.title}</p>
								</div>
							</Link>
						))}
				</ul>
				<Link className={styles.link} to={'/off-white'}>
					<button className={styles.btn}>SHOP OFF WHITE</button>
				</Link>
			</div>
		</div>
	);
};
