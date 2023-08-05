import { FC, useEffect, useState } from 'react';

import { EditPaymentProps } from './TypeEditPayment';

import styles from './EditPayment.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const EditPayment: FC<EditPaymentProps> = ({ setPaymentClick }) => {
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
					<h3>Edit Payment</h3>
					<CloseIcon onClick={() => setPaymentClick(false)} className={styles.icon} />
				</div>

				<div className={styles.bodyWrap}>
					<p className={styles.subTitle}>* Name on Card</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>* Credit Card</p>
					<div className={styles.inputWrap}>
						<input className={styles.cardNumber} placeholder='Card number' type='text' maxLength={16} />
						<input className={styles.mm_yy} placeholder='MM/YY' type='text' maxLength={4} />
						<input className={styles.cvc} placeholder='CVC' type='text' maxLength={3} />
					</div>
				</div>

				<div className={styles.buttonWrap}>
					<button className={styles.button}>SAVE CHANGES</button>
				</div>
			</div>

			<div className={styles.overlay} onClick={() => setPaymentClick(false)}></div>
		</>
	);
};
