import { FC } from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../../images/stores.jpg';
import imageTwo from '../../images/history.jpg';

import styles from './InfoBlock.module.scss';

export const InfoBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.box}>
						<Link to={'/store-location'}>
							<img className={styles.img} src={imageOne} alt='imageOne' />
						</Link>
						<div className={styles.flex}>
							<h2 className={styles.title}>FLIGHT CLUB STORES</h2>
							<p className={styles.text}>
								With three retail locations in{' '}
								<Link to={'/store-location'} className={styles.linkBrand}>
									New York
								</Link>
								,{' '}
								<Link to={'/store-location'} className={styles.linkBrand}>
									Los Angeles
								</Link>
								, and{' '}
								<Link to={'/store-location'} className={styles.linkBrand}>
									Miami
								</Link>
								, Flight Club remains the premier source for everything sneakers.
							</p>
							<Link className={styles.link} to={'/store-location'}>
								Learn More
							</Link>
						</div>
					</div>
					<div className={styles.box}>
						<Link to={'/about-us'}>
							<img className={styles.img} src={imageTwo} alt='imageTwo' />
						</Link>
						<div className={styles.flex}>
							<h2 className={styles.title}>OUR HISTORY</h2>
							<p className={styles.text}>
								For over a decade, Flight Club has changed the landscape of sneaker retail. Carrying every brand name on the market, Flight Club has evolved from a one-stop sneaker
								destination, to a cultural hub for sneaker enthusiasts and novices alike. From{' '}
								<Link to={'/air-jordan'} className={styles.linkBrand}>
									Air Jordans
								</Link>{' '}
								to{' '}
								<Link to={'/nike'} className={styles.linkBrand}>
									Nike
								</Link>{' '}
								to{' '}
								<Link to={'/new-balance'} className={styles.linkBrand}>
									New balance
								</Link>{' '}
								and more, we have it all.
							</p>
							<Link className={styles.link} to={'/about-us'}>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
