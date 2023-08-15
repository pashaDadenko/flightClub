import { FC } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setEdit } from '../../redux/shippingSlice/shippingSlice';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import styles from './ShippingFilled.module.scss';

export const ShippingFilled: FC = () => {
	const dispatch = useDispatch();
	const { name, streetAddress, apartment, city, postalCode, telephone } = useSelector((state: RootState) => state.shippingSlice);

	return (
		<div className={styles.wrapper}>
			<div className={styles.flex}>
				<p>SHIPPING ADDRESS</p>
				<div className={styles.flexBox}>
					<p className={styles.edit} onClick={() => dispatch(setEdit())}>
						Edit
					</p>
					<CheckCircleOutlineOutlinedIcon className={styles.icon} />
				</div>
			</div>
			<p className={styles.line}></p>
			<div className={styles.wrap}>
				<p>{name}</p>
				<div className={styles.box}>
					<p>{city},</p>
					<p>{postalCode}</p>
				</div>
				<p>{streetAddress}</p>
				<p>{apartment}</p>
				<p>{telephone}</p>
			</div>
		</div>
	);
};
