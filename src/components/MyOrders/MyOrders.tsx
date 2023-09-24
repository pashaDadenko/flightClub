import { FC } from 'react';

import styles from './MyOrders.module.scss';

export const MyOrders: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ORDERS</h2>
			</div>
		</div>
	);
};
