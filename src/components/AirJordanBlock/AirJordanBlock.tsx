import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PATHS } from '../../root/routesConfig';

import styles from './AirJordanBlock.module.scss';

export const AirJordanBlock: FC = () => {
	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const airJordan = allSneakers.filter((item) => item.brand === 'Air jordan').slice(0, 8);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>AIR JORDAN</h2>
				<ul className={styles.previewGroupe}>
					{airJordan &&
						airJordan.map((sneaker) => (
							<Link className={styles.previewProduct} to={`/details/${sneaker.id}`} key={sneaker.id}>
								<img className={styles.img} src={sneaker.images[0]} alt='image' />
								<div className={styles.info}>
									<span className={styles.subTitle}>{sneaker.brand}</span>
									<p className={styles.text}>{sneaker.title}</p>
								</div>
							</Link>
						))}
				</ul>
				<Link className={styles.link} to={PATHS.AIR_JORDAN}>
					<button className={styles.btn}>SHOP AIR JORDAN</button>
				</Link>
			</div>
		</div>
	);
};
