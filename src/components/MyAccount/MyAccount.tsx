import { FC, useState } from 'react';

import styles from './MyAccount.module.scss';
import { EditAccount } from '../EditAccount/EditAccount';

export const MyAccount: FC = () => {
	const [accountClick, setAccountClick] = useState(false);
	const [shippingClick, setShippingClick] = useState(false);
	const [paymentClick, setPaymentClick] = useState(false);
	const [billingClick, setBillingClick] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY ACCOUNT</h2>

				<div className={styles.infoWrap}>
					<div className={styles.accountWrap}>
						<div className={styles.accountTop}>
							<p>ACCOUNT</p>
							<p onClick={() => setAccountClick(true)} className={styles.edit}>
								Edit
							</p>
						</div>
						<div className={styles.accountBottom}>
							<p>Full Name</p>
							<p>email</p>
						</div>
					</div>

					<div className={styles.shippingWrap}>
						<div className={styles.shippingTop}>
							<p>SHIPPING ADDRESS</p>
							<p onClick={() => setShippingClick(true)} className={styles.edit}>
								Edit
							</p>
						</div>
						<div className={styles.shippingBottom}>
							<p>Full Name</p>
							<p>Street Address</p>
							<p>Apartment, Suite, Unit, Building, Floor, etc.</p>
							<p>City</p>
							<p> Zip / Postal Code</p>
							<p>Country or Region</p>
							<p>Telephone</p>
						</div>
					</div>

					<div className={styles.paymentWrap}>
						<div className={styles.paymentTop}>
							<p>PAYMENT</p>
							<p onClick={() => setPaymentClick(true)} className={styles.edit}>
								Edit
							</p>
						</div>
						<div className={styles.paymentBottom}>
							<p>Full Name</p>
							<p>card number</p>
						</div>
					</div>

					<div className={styles.billingWrap}>
						<div className={styles.billingTop}>
							<p>BILLING ADDRESS</p>
							<p onClick={() => setBillingClick(true)} className={styles.edit}>
								Edit
							</p>
						</div>
						<div className={styles.billingBottom}>
							<p>Full Name</p>
							<p>Street Address</p>
							<p>Apartment, Suite, Unit, Building, Floor, etc.</p>
							<p>City</p>
							<p> Zip / Postal Code</p>
							<p>Country or Region</p>
							<p>Telephone</p>
						</div>
					</div>
				</div>
			</div>
			{accountClick && <EditAccount />}
		</div>
	);
};
