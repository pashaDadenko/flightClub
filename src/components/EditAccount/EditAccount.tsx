import { FC, useEffect, useState } from 'react';

import { EditAccountProps } from './TypeEditAccount';

import styles from './EditAccount.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const EditAccount: FC<EditAccountProps> = ({ setAccountClick }) => {
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
					<h3>Edit Account</h3>
					<CloseIcon onClick={() => setAccountClick(false)} className={styles.icon} />
				</div>

				<div className={styles.bodyWrap}>
					<p className={styles.subTitle}>Full Name</p>
					<input className={styles.input} type='text' />
					<p className={styles.subTitle}>Email</p>
					<input className={styles.input} type='text' />
				</div>

				<div className={styles.buttonWrap}>
					<button className={styles.button}>SAVE CHANGES</button>
				</div>
			</div>

			<div className={styles.overlay} onClick={() => setAccountClick(false)}></div>
		</>
	);
};
