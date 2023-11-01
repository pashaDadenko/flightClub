import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../root/routesConfig';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './HeaderAccount.module.scss';
import { variantAccount, variantCart, variantOrders, variantOut, variantUp, variantWrap } from './HeaderAccountVariants';
import { TypeHeaderAccountProps } from './TypeHeaderAccount';

export const HeaderAccount: FC<TypeHeaderAccountProps> = ({ scrollColor, scrollBack, singOutClick }) => {
	const { isAuth } = useAuth();

	const [accountHover, setAccountHover] = useState(false);

	return (
		<div className={styles.wrapper} style={scrollColor} onMouseLeave={() => setAccountHover(false)}>
			<Link to={''} className={styles.item} style={accountHover ? { color: '#33322f49' } : scrollColor} onMouseEnter={() => setAccountHover(true)}>
				Account
			</Link>
			<AnimatePresence>
				{accountHover && (
					<motion.div className={styles.wrap} style={scrollBack} initial={'initial'} animate={'animate'} exit={'exit'} variants={variantWrap}>
						<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantAccount}>
							<Link className={styles.item} style={scrollColor} to={isAuth ? PATHS.MY_ACCOUNT : PATHS.LOGIN}>
								My Account
							</Link>
						</motion.div>
						<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOrders}>
							<Link className={styles.item} style={scrollColor} to={isAuth ? PATHS.MY_ORDERS : PATHS.LOGIN}>
								My Orders
							</Link>
						</motion.div>
						<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantCart}>
							<Link className={styles.item} style={scrollColor} to={PATHS.MY_CART}>
								My Cart
							</Link>
						</motion.div>
						{isAuth ? (
							<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOut}>
								<Link to={''} className={styles.item} style={scrollColor} onClick={singOutClick}>
									Sing Out
								</Link>
							</motion.div>
						) : (
							<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantUp}>
								<Link className={styles.item} style={scrollColor} to={PATHS.LOGIN}>
									Sing Up
								</Link>
							</motion.div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
