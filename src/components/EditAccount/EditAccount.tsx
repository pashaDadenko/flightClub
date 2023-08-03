import { FC } from 'react';

import styles from './EditAccount.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const EditAccount: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrap}>
				<h3>Edit Account</h3>
				<CloseIcon />
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
	);
};
