import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './ForgotPassword.module.scss';

export const ForgotPassword: FC = () => {
	return (
		<form className={styles.wrapper}>
			<div className={styles.container}>
				<p>FORGOT PASSWORD?</p>
				<p className={styles.text}>Please enter your email address below. You will receive a link to reset your password.</p>
				<p className={styles.line}></p>

				<div className={styles.wrap}>
					<p className={styles.title}>Email Address</p>
				</div>
				<input className={styles.input} />

				<div className={styles.wrap}>
					<p className={styles.title}>Password</p>
				</div>
				<div className={styles.inputWrap}>
					<input className={styles.input} />
				</div>

				<button className={styles.submit} disabled>
					SUBMIT
				</button>

				<Link className={styles.link} to={'/login'}>
					<button className={styles.back}>BACK TO LOGIN</button>
				</Link>
			</div>
		</form>
	);
};
