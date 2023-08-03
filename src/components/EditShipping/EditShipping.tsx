import { FC, useEffect, useState } from 'react';

import { EditShippingProps } from './TypeEditShipping';

import styles from './EditShipping.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const EditShipping: FC<EditShippingProps> = ({ setShippingClick }) => {
	const [scrollLocked, setScrollLocked] = useState(false);

	useEffect(() => {
		if (!scrollLocked) {
			document.body.style.overflow = 'hidden';
			setScrollLocked(true);
		}

		return () => {
			if (scrollLocked) {
				document.body.style.overflow = 'auto';
				setScrollLocked(false);
			}
		};
	}, [scrollLocked]);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.titleWrap}>
					<h3>Edit Shipping Address</h3>
					<CloseIcon onClick={() => setShippingClick(false)} className={styles.icon} />
				</div>

				<div className={styles.bodyWrap}>
					<p className={styles.subTitle}>* Full Name</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>* Street Address</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>Apartment, Suite, Unit, Building, Floor, etc.</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>* City</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>* Zip / Postal Code</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>* Country or Region</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>Telephone</p>
					<input className={styles.input} type='text' />
				</div>

				<div className={styles.buttonWrap}>
					<button className={styles.button}>SAVE CHANGES</button>
				</div>
			</div>

			<div className={styles.overlay} onClick={() => setShippingClick(false)}></div>
		</>
	);
};
