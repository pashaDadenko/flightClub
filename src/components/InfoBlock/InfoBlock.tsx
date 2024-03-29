import { FC } from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../../images/stores.jpg';
import { PATHS } from '../../root/routesConfig';
import imageTwo from '../../images/history.jpg';

import styles from './InfoBlock.module.scss';

export const InfoBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.box}>
						<Link to={PATHS.STORE_LOCATION}>
							<img className={styles.img} src={imageOne} alt='imageOne' />
						</Link>
						<div className={styles.flex}>
							<h2 className={styles.title}>FLIGHT CLUB STORES</h2>
							<p className={styles.text}>
								With three retail locations in{' '}
								<Link to={PATHS.STORE_LOCATION} className={styles.linkBrand}>
									New York
								</Link>
								,{' '}
								<Link to={PATHS.STORE_LOCATION} className={styles.linkBrand}>
									Los Angeles
								</Link>
								, and{' '}
								<Link to={PATHS.STORE_LOCATION} className={styles.linkBrand}>
									Miami
								</Link>
								, Flight Club remains the premier source for everything sneakers.
							</p>
							<Link className={styles.link} to={PATHS.STORE_LOCATION}>
								Learn More
							</Link>
						</div>
					</div>
					<div className={styles.box}>
						<Link to={PATHS.ABOUT_US}>
							<img className={styles.img} src={imageTwo} alt='imageTwo' />
						</Link>
						<div className={styles.flex}>
							<h2 className={styles.title}>OUR HISTORY</h2>
							<p className={styles.text}>
								For over a decade, Flight Club has changed the landscape of sneaker retail. Carrying every brand name on the market, Flight Club has evolved from a one-stop sneaker destination, to a cultural hub for sneaker enthusiasts and novices alike. From{' '}
								<Link to={PATHS.AIR_JORDAN} className={styles.linkBrand}>
									Air Jordans
								</Link>{' '}
								to{' '}
								<Link to={PATHS.NIKE} className={styles.linkBrand}>
									Nike
								</Link>{' '}
								to{' '}
								<Link to={PATHS.NEW_BALANCE} className={styles.linkBrand}>
									New balance
								</Link>{' '}
								and more, we have it all.
							</p>
							<Link className={styles.link} to={PATHS.ABOUT_US}>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
