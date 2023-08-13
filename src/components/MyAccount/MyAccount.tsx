import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MyAccount.module.scss';

export const MyAccount: FC = () => {
	const { fullName, email } = useSelector((state: RootState) => state.userSlice);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ACCOUNT</h2>

				<div className={styles.infoWrap}>
					<div className={styles.accountWrap}>
						<div className={styles.accountTop}>
							<p>ACCOUNT</p>
						</div>
						<div className={styles.accountBottom}>
							<p>{fullName}</p>
							<p>{email}</p>
						</div>
					</div>

					<div className={styles.shippingWrap}>
						<div className={styles.shippingTop}>
							<p>SHIPPING ADDRESS</p>
						</div>
						<div className={styles.shippingBottom}>
							<div> Please add a default shipping address.</div>

							{/* <p>Full Name</p>
							<p>Street Address</p>
							<p>Apartment, Suite, Unit, Building, Floor, etc.</p>
							<p>City</p>
							<p> Zip / Postal Code</p>
							<p>Country or Region</p>
							<p>Telephone</p> */}
						</div>
					</div>

					<div className={styles.paymentWrap}>
						<div className={styles.paymentTop}>
							<p>PAYMENT</p>
						</div>
						<div className={styles.paymentBottom}>
							<div>No saved payments.</div>
							{/* 
							<p>Name on Card</p>
							<p>Credit Card</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
