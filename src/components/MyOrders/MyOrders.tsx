import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MyOrders.module.scss';

export const MyOrders: FC = () => {
	const { userId, numberOrder, orderTotalPrice, sneakers } = useSelector((state: RootState) => state.ordersSlice);

	console.log(userId, numberOrder, orderTotalPrice, sneakers);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ORDERS</h2>
			</div>
		</div>
	);
};
