import { FC } from 'react';
import { motion } from 'framer-motion';
import { variants } from './NotFoundVariants';
import { useLocation } from 'react-router-dom';
import notFoundImage from '../../images/notFound.png';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<motion.div initial='initial' animate={'animate'} exit='exit' variants={variants}>
					{pathname === '/my-cart' ? (
						<h2 className={styles.title}>EMPTY CART</h2>
					) : pathname === '/my-orders' ? (
						<h2 className={styles.title}>YOU HAVE NO ORDERS</h2>
					) : (
						<h2 className={styles.title}>404 - PAGE NOT FOUND</h2>
					)}

					{pathname === '/my-cart' ? (
						<p className={styles.text}>Sorry, your shopping cart is empty. Use the search or go to the homepage to find what you are looking for.</p>
					) : pathname === '/my-orders' ? (
						<p className={styles.text}>Sorry, you haven't placed an order yet. Use the search or go to the main page to find what you are looking for.</p>
					) : (
						<p className={styles.text}>Sorry, we could not find this page. Please search again or navigate to the home page to find what you are looking for.</p>
					)}
				</motion.div>
				<motion.img src={notFoundImage} alt='notFoundImage' initial='initial' animate={'animate'} exit='exit' variants={variants} whileHover='hover' />
			</div>
		</div>
	);
};
