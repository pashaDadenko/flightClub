import { FC } from 'react';
import { motion } from 'framer-motion';
import { variants } from './NotFoundVariants';
import image from '../../images/notFound.png';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<motion.div initial='initial' animate={'animate'} exit='exit' variants={variants}>
					{pathname === PATHS.MY_CART ? <h2 className={styles.title}>EMPTY CART</h2> : pathname === PATHS.MY_ORDERS ? <h2 className={styles.title}>YOU HAVE NO ORDERS</h2> : <h2 className={styles.title}>404 - PAGE NOT FOUND</h2>}
					{pathname === PATHS.MY_CART ? (
						<p className={styles.text}>Sorry, your shopping cart is empty. Use the search or go to the homepage to find what you are looking for.</p>
					) : pathname === PATHS.MY_ORDERS ? (
						<p className={styles.text}>Sorry, you haven't placed an order yet. Use the search or go to the main page to find what you are looking for.</p>
					) : (
						<p className={styles.text}>Sorry, we could not find this page. Please search again or navigate to the home page to find what you are looking for.</p>
					)}
				</motion.div>
				<motion.img className={styles.img} src={image} alt='image' initial='initial' animate={'animate'} exit='exit' variants={variants} whileHover='hover' />
			</div>
		</div>
	);
};
