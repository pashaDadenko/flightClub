import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import styles from './ShippingMethod.module.scss';

export const ShippingMethod: FC = () => {
	const standardShipping = useSelector((state: RootState) => state.shippingSlice.standardShipping);

	return (
		<div className={styles.wrapper}>
			<div className={styles.flex}>
				<p>SHIPPING METHOD</p>
				<CheckCircleOutlineOutlinedIcon className={styles.icon} />
			</div>
			<p className={styles.line}></p>
			<p className={styles.ship}>Standard - ${standardShipping}</p>
			<p className={styles.text}>
				Pre-verified and ready to ship from a Flight Club facility. <br />
				International shipping times vary by country.
			</p>
		</div>
	);
};
