import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { variant } from './MyOrdersVariants';
import { RootState } from '../../redux/store';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './MyOrders.module.scss';

export const MyOrders: FC = () => {
	const ordersData = useSelector((state: RootState) => state.ordersSlice.ordersData);

	const [activeOrders, setActiveOrders] = useState<boolean[]>(Array(ordersData.length).fill(false));
	const toggleOrderContent = (index: number) => setActiveOrders(activeOrders.map((value, i) => (i === index ? !value : value)));

	const hoverAnimation = {
		translateY: -10,
		boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ORDERS</h2>

				<ul className={styles.wrap}>
					{ordersData &&
						ordersData
							.filter((order) => order.numberOrder !== null)
							.sort((a, b) => (b.numberOrder ?? -1) - (a.numberOrder ?? -1))
							.map((order, index) => (
								<motion.li key={order.numberOrder} className={styles.orderWrap} whileHover={hoverAnimation} onClick={() => toggleOrderContent(index)}>
									<div className={styles.orderBox}>
										<p className={styles.orderTitle}>
											Order № <span className={styles.subTitle}>{order.numberOrder}</span>
										</p>

										<p className={styles.orderTitle}>
											Order dated <span className={styles.subTitle}>{order.orderDate}</span>
										</p>

										<p className={styles.orderTitle}>
											$ <span className={styles.subTitle}>{order.orderTotalPrice}</span>
										</p>
									</div>
									<AnimatePresence mode='wait'>
										{activeOrders[index] ? (
											<motion.div className={styles.addressBox} key='address' initial={'initial'} animate={'animate'} exit={'exit'} variants={variant}>
												<div className={styles.name}>
													<p>{order.name}</p>
												</div>
												<div className={styles.flex}>
													<div className={styles.box}>
														<p>{order.city}, </p>
														<p>{order.postalCode}</p>
													</div>
													<p className={styles.box}>{order.streetAddress}</p>
													<p className={styles.box}>{order.apartment}</p>
												</div>
											</motion.div>
										) : (
											<motion.ul className={styles.sneakerWrap} key='sneakers' initial={'initial'} animate={'animate'} exit={'exit'} variants={variant}>
												{order.sneakers.slice(0, 4).map((sneaker, index) => (
													<div key={index} className={styles.sneakerBox}>
														<img key={index} className={styles.image} src={sneaker.image} alt='sneaker' />
														<p>{sneaker.title}</p>
														<p>{sneaker.sizes}</p>
													</div>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</motion.li>
							))}
				</ul>
			</div>
		</div>
	);
};
