import { FC } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/aboutUs.png';

import styles from './AboutUs.module.scss';

export const AboutUs: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>ABOUT US</h2>
				<div className={styles.wrap}>
					<p className={styles.text}>
						Established in New York City over fifteen years ago, Flight Club revolutionized sneaker retail as the original consignment store for rare shoes. Carrying the rarest exclusives and collectible sneakers, Flight Club has evolved from a one-stop sneaker destination, to a cultural
						hub for sneaker enthusiasts and novices alike. With three brick-and-mortar locations in{' '}
						<Link className={styles.link} to={'/store-location'}>
							New York City
						</Link>
						,{' '}
						<Link className={styles.link} to={'/store-location'}>
							Los Angeles
						</Link>{' '}
						and{' '}
						<Link className={styles.link} to={'/store-location'}>
							Miami
						</Link>
						, Flight Club remains the premier source for authentic, rare sneakers.
					</p>
					<img className={styles.image} src={image} alt='image' />
				</div>
			</div>
		</div>
	);
};
