import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import { useGetSneakersQuery } from '../../redux/api/api';

import styles from './AllSneakersBlock.module.scss';

export const AllSneakersBlock: FC = () => {
	const { data = [] } = useGetSneakersQuery('');
	const randomSneakers = data.slice(0, 8).sort((a, b) => b.id - a.id);

	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<h2 className={styles.title}>ALL SNEAKERS</h2>
				<ul className={styles.previewGroupe}>
					{randomSneakers &&
						randomSneakers.map((sneaker) => (
							<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
								<img className={styles.img} src={sneaker.images[0]} alt='image' />
								<div className={styles.info}>
									<span className={styles.subTitle}>{sneaker.brand}</span>
									<p className={styles.text}>{sneaker.title}</p>
								</div>
							</Link>
						))}
				</ul>
				<Link className={styles.link} to={PATHS.SNEAKERS}>
					<button className={styles.btn}>SHOP ALL SNEAKERS</button>
				</Link>
			</section>
		</div>
	);
};
