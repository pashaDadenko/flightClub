import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './MyAccount.module.scss';
import { RootState } from '../../redux/store';

export const MyAccount: FC = () => {
	const { email, fullNameReg } = useSelector((state: RootState) => state.userSlice);
	const { name, streetAddress, apartment, city, postalCode, telephone } = useSelector((state: RootState) => state.shippingSlice);

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
							<p>{fullNameReg}</p>
							<p>{email}</p>
						</div>
					</div>
					<div className={styles.shippingWrap}>
						<div className={styles.shippingTop}>
							<p>SHIPPING ADDRESS</p>
						</div>
						<div className={styles.shippingBottom}>
							{name && streetAddress && apartment && city && postalCode && telephone ? (
								<div className={styles.flex}>
									<p>{name}</p>
									<div className={styles.box}>
										<p>{city},</p>
										<p>{postalCode}</p>
									</div>
									<p>{streetAddress}</p>
									<p>{apartment}</p>
									<p>{telephone}</p>
								</div>
							) : (
								<div> Please add a default shipping address.</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
