import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../root/routesConfig';
import { useGetSneakersQuery } from '../../redux/api/api';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
	const { isAuth } = useAuth();
	const { data = [] } = useGetSneakersQuery('');

	const sixSneakers = data.slice(-6);

	return (
		<>
			<footer className={styles.footer}>
				<Link className={styles.logo} to={PATHS.HOME}>
					FLIGHT CLUB
				</Link>
				<div className={styles.wrapper}>
					<div className={styles.wrap}>
						<div className={styles.title}>Trending</div>
						<Link to={PATHS.AIR_JORDAN} className={styles.subTitle}>
							Air Jordans
						</Link>
						<Link to={PATHS.NIKE_DUNK} className={styles.subTitle}>
							Nike Dunks
						</Link>
						<Link to={PATHS.DARK_SHOES} className={styles.subTitle}>
							Dark Shoes
						</Link>
						<div className={styles.subTitle}>Travis Scott Shoes</div>
						<div className={styles.subTitle}>Bad Bunny x adidas</div>
						<Link to={PATHS.RAR_SHOES} className={styles.subTitle}>
							Rar Shoe
						</Link>
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>New Releases</div>
						{sixSneakers?.map((sneaker) => (
							<Link to={`/details/${sneaker.id}`} className={styles.subTitle} key={sneaker.id} onClick={() => window.scrollTo(0, 0)}>
								{sneaker.title}
							</Link>
						))}
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>Support</div>
						<Link to={isAuth ? PATHS.MY_ACCOUNT : PATHS.LOGIN} className={styles.subTitle}>
							My Account
						</Link>
						<Link to={isAuth ? PATHS.MY_ORDERS : PATHS.LOGIN} className={styles.subTitle}>
							My Orders
						</Link>
						<Link to={PATHS.SHIPPING_AND_RETURNS} className={styles.subTitle}>
							Shipping & Returns
						</Link>
						<Link to={PATHS.SELL_SNEAKERS} className={styles.subTitle}>
							Sell Sneakers
						</Link>
					</div>
					<div className={styles.wrap}>
						<div className={styles.title}>About Us</div>
						<Link to={PATHS.STORE_LOCATION} className={styles.subTitle}>
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
