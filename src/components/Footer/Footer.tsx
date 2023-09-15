import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { RootState } from '../../redux/store';
import { motion } from 'framer-motion';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
	const { isAuth } = useAuth();

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers).slice(-6);

	return (
		<>
			<footer className={styles.footer}>
				<motion.div
					style={{ display: 'inline-block' }}
					initial={{ rotateY: 0 }}
					animate={{ rotateY: 360 }}
					transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}>
					<Link className={styles.logo} to={'/'}>
						FLIGHT CLUB
					</Link>
				</motion.div>
				<div className={styles.wrapper}>
					<div className={styles.wrap}>
						<div className={styles.title}>Trending</div>
						<Link to={'/air-jordan'} className={styles.subTitle}>
							Air Jordans
						</Link>
						<Link to={'/nike-dunk'} className={styles.subTitle}>
							Nike Dunks
						</Link>
						<Link to={'/dark-shoes'} className={styles.subTitle}>
							Dark Shoes
						</Link>
						<div className={styles.subTitle}>Travis Scott Shoes</div>
						<div className={styles.subTitle}>Bad Bunny x adidas</div>
						<Link to={'/rar-shoes'} className={styles.subTitle}>
							Rar Shoe
						</Link>
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>New Releases</div>
						{allSneakers &&
							allSneakers.map((sneaker) => (
								<Link to={`/details/${sneaker.id}`} className={styles.subTitle} key={sneaker.id} onClick={() => window.scrollTo(0, 0)}>
									{sneaker.title}
								</Link>
							))}
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>Support</div>
						<Link to={isAuth ? '/my-account' : '/login'} className={styles.subTitle}>
							My Account
						</Link>
						<Link to={'/shipAndReturn'} className={styles.subTitle}>
							Shipping & Returns
						</Link>
						<Link to={'/sell-sneakers'} className={styles.subTitle}>
							Sell Sneakers
						</Link>
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>About Us</div>
						<Link to={'/store-location'} className={styles.subTitle}>
							Stores
						</Link>
						<div className={styles.subTitle}>Instagram</div>
						<div className={styles.subTitle}>Facebook</div>
						<div className={styles.subTitle}>Twitter</div>
					</div>
				</div>
			</footer>
			<div className={styles.text}>© 2023 Flight Club New York LLC. All Rights Reserved</div>
		</>
	);
};
