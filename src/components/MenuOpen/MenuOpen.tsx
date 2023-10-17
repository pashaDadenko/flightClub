import { Link } from 'react-router-dom';
import { menuProps } from './TypeMenuOpen';
import { useAuth } from '../../hooks/useAuth';
import { FC, useEffect, useState } from 'react';
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
					<Link className={styles.logo} to={'/'} onClick={() => setMenuOpen(false)}>
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
							<Link className={styles.item} to={'/air-jordan'} onClick={() => setMenuOpen(false)}>
								Air jordan
							</Link>
							<Link className={styles.item} to={'/new-balance'} onClick={() => setMenuOpen(false)}>
								New Balance
							</Link>
							<Link className={styles.item} to={'/nike'} onClick={() => setMenuOpen(false)}>
								Nike
							</Link>
							<Link className={styles.item} to={'/off-white'} onClick={() => setMenuOpen(false)}>
								Off white
							</Link>
							<Link className={styles.item} to={'/yeezy'} onClick={() => setMenuOpen(false)}>
								Yeezy
							</Link>
							<Link className={styles.item} to={'/sneakers'} onClick={() => setMenuOpen(false)}>
								More Brands
							</Link>
						</div>
					</div>
					<div className={styles.accountBox}>
						<p className={styles.title}>Account</p>
						<div className={styles.accountFlex}>
							<Link className={styles.item} to={isAuth ? '/my-account' : '/login'} onClick={() => setMenuOpen(false)}>
								My Account
							</Link>
							<Link className={styles.item} to={'/shipAndReturn'} onClick={() => setMenuOpen(false)}>
								Shipping & Returns
							</Link>
							<Link className={styles.item} to={isAuth ? '/my-orders' : '/login'} onClick={() => setMenuOpen(false)}>
								My Orders
							</Link>
							<Link className={styles.item} to={'/sell-sneakers'} onClick={() => setMenuOpen(false)}>
								Sell Sneakers
							</Link>
							<Link className={styles.item} to={'/my-cart'} onClick={() => setMenuOpen(false)}>
								My Cart
							</Link>
							{isAuth ? (
								<Link className={styles.item} to={''} onClick={singOutClick}>
									Sing Out
								</Link>
							) : (
								<Link className={styles.item} to={'/login'} onClick={() => setMenuOpen(false)}>
									Sing Up
								</Link>
							)}
						</div>
					</div>
					<div className={styles.storesBox}>
						<p className={styles.title}>Retail Stores</p>
						<div className={styles.storesFlex}>
							<Link className={styles.item} to={'/store-location'} onClick={() => setMenuOpen(false)}>
								FCNY <br /> 812 Broadway, New York City
							</Link>
							<Link className={styles.item} to={'/store-location'} onClick={() => setMenuOpen(false)}>
								FCLA <br /> 535 N Fairfax, Los Angeles
							</Link>
							<Link className={styles.item} to={'/store-location'} onClick={() => setMenuOpen(false)}>
								FC Miami <br /> 3910 NE 1st Ave, Miami
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
