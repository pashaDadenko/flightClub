import { FC } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MyOrders.module.scss';

export const MyOrders: FC = () => {
	const ordersData = useSelector((state: RootState) => state.ordersSlice.ordersData);

	const hoverAnimation = {
		translateY: -10,
		boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ORDERS</h2>

				<ul className={styles.wrap}>
					{ordersData.length > 0 ? (
						ordersData.map((order) => (
							<motion.li key={order.numberOrder} className={styles.orderWrap} whileHover={hoverAnimation}>
								<div className={styles.orderBox}>
									<p className={styles.numberOrder}>
										Order № <span className={styles.span}>{order.numberOrder}</span>
									</p>
									<p>Order dated {order.orderDate}</p>
									<p className={styles.orderTotalPrice}>
										$ <span className={styles.span}>{order.orderTotalPrice}</span>
									</p>
								</div>
								<ul className={styles.sneakerWrap}>
									{order.sneakers.slice(0, 4).map((sneaker, index) => (
										<img key={index} className={styles.image} src={sneaker.image} alt='sneaker' />
									))}
								</ul>
							</motion.li>
						))
					) : (
						<p>loading...</p>
					)}
				</ul>
			</div>
		</div>
	);
};
