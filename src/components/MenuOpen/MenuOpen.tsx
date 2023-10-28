import { Link } from 'react-router-dom';
import { menuProps } from './TypeMenuOpen';
import { useAuth } from '../../hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { PATHS } from '../../root/routesConfig';
import { variantMenu } from './MenuOpenVariants';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './MenuOpen.module.scss';

export const MenuOpen: FC<menuProps> = ({ setMenuOpen, singOutClick }) => {
	const { isAuth } = useAuth();

	const [scrollLocked, setScrollLocked] = useState(false);

	useEffect(() => {
		if (!scrollLocked) {
			document.body.style.overflow = 'hidden';
			setScrollLocked(true);
		}
		return () => {
			if (scrollLocked) {
				document.body.style.overflow = 'auto';
				setScrollLocked(false);
			}
		};
	}, [scrollLocked]);

	return (
		<AnimatePresence>
			<motion.div className={styles.wrapper} key='menu' initial={'initial'} animate={'animate'} exit={'exit'} variants={variantMenu}>
				<div className={styles.header}>
					<Link className={styles.logo} to={PATHS.HOME} onClick={() => setMenuOpen(false)}>
						FLIGHT CLUB
					</Link>
					<button className={styles.buttonClose} onClick={() => setMenuOpen(false)}>
						Close
					</button>
				</div>
				<div className={styles.wrap}>
					<div className={styles.sneakerBox}>
						<p className={styles.title}>Shop</p>
						<div className={styles.sneakerFlex}>
							<Link className={styles.item} to={PATHS.SNEAKERS} onClick={() => setMenuOpen(false)}>
								All sneakers
							</Link>
							<Link className={styles.item} to={PATHS.AIR_JORDAN} onClick={() => setMenuOpen(false)}>
								Air jordan
							</Link>
							<Link className={styles.item} to={PATHS.NEW_BALANCE} onClick={() => setMenuOpen(false)}>
								New Balance
							</Link>
							<Link className={styles.item} to={PATHS.NIKE} onClick={() => setMenuOpen(false)}>
								Nike
							</Link>
							<Link className={styles.item} to={PATHS.OFF_WHITE} onClick={() => setMenuOpen(false)}>
								Off white
							</Link>
							<Link className={styles.item} to={PATHS.YEEZY} onClick={() => setMenuOpen(false)}>
								Yeezy
							</Link>
							<Link className={styles.item} to={PATHS.TOP_SELLERS} onClick={() => setMenuOpen(false)}>
								Top sellers
							</Link>
							<Link className={styles.item} to={PATHS.SNEAKERS} onClick={() => setMenuOpen(false)}>
								More Brands
							</Link>
						</div>
					</div>
					<div className={styles.accountBox}>
						<p className={styles.title}>Account</p>
						<div className={styles.accountFlex}>
							<Link className={styles.item} to={isAuth ? PATHS.MY_ACCOUNT : PATHS.LOGIN} onClick={() => setMenuOpen(false)}>
								My Account
							</Link>
							<Link className={styles.item} to={PATHS.SHIPPING_AND_RETURNS} onClick={() => setMenuOpen(false)}>
								Shipping & Returns
							</Link>
							<Link className={styles.item} to={isAuth ? PATHS.MY_ORDERS : PATHS.LOGIN} onClick={() => setMenuOpen(false)}>
								My Orders
							</Link>
							<Link className={styles.item} to={PATHS.SELL_SNEAKERS} onClick={() => setMenuOpen(false)}>
								Sell Sneakers
							</Link>
							<Link className={styles.item} to={PATHS.MY_CART} onClick={() => setMenuOpen(false)}>
								My Cart
							</Link>
							{isAuth ? (
								<Link className={styles.item} to={''} onClick={singOutClick}>
									Sing Out
								</Link>
							) : (
								<Link className={styles.item} to={PATHS.LOGIN} onClick={() => setMenuOpen(false)}>
									Sing Up
								</Link>
							)}
						</div>
					</div>
					<div className={styles.storesBox}>
						<p className={styles.title}>Retail Stores</p>
						<div className={styles.storesFlex}>
							<Link className={styles.item} to={PATHS.STORE_LOCATION} onClick={() => setMenuOpen(false)}>
								FCNY <br /> 812 Broadway, New York City
							</Link>
							<Link className={styles.item} to={PATHS.STORE_LOCATION} onClick={() => setMenuOpen(false)}>
								FCLA <br /> 535 N Fairfax, Los Angeles
							</Link>
							<Link className={styles.item} to={PATHS.STORE_LOCATION} onClick={() => setMenuOpen(false)}>
								FC Miami <br /> 3910 NE 1st Ave, Miami
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
