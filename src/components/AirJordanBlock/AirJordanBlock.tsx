import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import { useGetSneakersQuery } from '../../redux/api/api';

import styles from './AirJordanBlock.module.scss';

export const AirJordanBlock: FC = () => {
	const { data = [] } = useGetSneakersQuery('');
	const airJordan = data.filter((item) => item.brand === 'Air jordan').slice(0, 8);

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
