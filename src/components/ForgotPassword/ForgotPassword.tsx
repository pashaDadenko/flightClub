import { FC, useState } from 'react';
import styles from './ForgotPassword.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeForgotPassword } from './TypeForgotPassword';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { fetchSignInMethodsForEmail, getAuth, sendPasswordResetEmail } from 'firebase/auth';

export const ForgotPassword: FC = () => {
	const [forgotError, setForgotError] = useState<string | null>(null);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm<TypeForgotPassword>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<TypeForgotPassword> = async (data) => {
		const auth = getAuth();
		const methods = await fetchSignInMethodsForEmail(auth, data.email);

		methods.length > 0
			? sendPasswordResetEmail(auth, data.email)
					.then(() => {
						navigate('/login');
					})
					.catch(() => {
						reset();
					})
			: (reset(), setForgotError('The user with this email is not registered'));
	};

	return (
		<>
			{forgotError && (
				<p className={styles.forgotError}>
					<HighlightOffIcon /> {forgotError}
				</p>
			)}

			<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.container}>
					<p>FORGOT PASSWORD?</p>
					<p className={styles.text}>Please enter your email address below. You will receive a link to reset your password.</p>
					<p className={styles.line}></p>

					<div className={styles.wrap}>
						<p className={styles.title}>* Email Address</p>
						{errors.email && <p className={styles.error}>{errors.email.message}</p>}
					</div>
					<input
						className={styles.input}
						{...register('email', {
							pattern: {
								value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
								message: 'Email address is not valid.',
							},
						})}
					/>

					{isValid && watch('email') ? (
						<button className={styles.submitUpdate}>SUBMIT</button>
					) : (
						<button className={styles.submit} disabled>
							SUBMIT
						</button>
					)}

					<Link className={styles.link} to={'/login'}>
						<button className={styles.back}>BACK TO LOGIN</button>
					</Link>
				</div>
			</form>
		</>
	);
};
