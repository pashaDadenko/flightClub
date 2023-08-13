import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TypeLogin } from './TypeLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setUser } from '../../redux/userSlice/userSlice';
import { OAuthCredential, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Login.module.scss';

export const FormLogin: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm<TypeLogin>({ mode: 'onChange' });

	const email = watch('email');
	const password = watch('password');

	const onSubmit: SubmitHandler<TypeLogin> = (data) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				const newUser = user as unknown as OAuthCredential;
				dispatch(
					setUser({
						email: user.email,
						token: newUser.accessToken,
						id: user.uid,
					})
				);
				navigate('/my-account');
			})
			.catch(() => {
				reset();
				alert('Email or password not correct.');
			});
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.container}>
				<p>LOGIN</p>
				<p className={styles.line}></p>

				<div className={styles.emailWrap}>
					<p className={styles.email}>Email Address</p>
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

				<div className={styles.passwordWrap}>
					<p className={styles.password}>Password</p>
					{errors.password && <p className={styles.error}>{errors.password.message}</p>}
				</div>
				<input
					className={styles.input}
					type='password'
					{...register('password', {
						pattern: {
							value: /^[a-z0-9]{6,}$/i,
							message: 'Password is not valid.',
						},
					})}
				/>

				{isValid && email && password ? (
					<button className={styles.loginUpdate}>LOGIN</button>
				) : (
					<button className={styles.login} disabled>
						LOGIN
					</button>
				)}
				<div className={styles.flex}>
					<div className={styles.miniLine}></div>
					<p className={styles.new}>NEW TO FLIGHT CLUB?</p>
					<div className={styles.miniLine}></div>
				</div>
				<Link className={styles.link} to={'/create-account'}>
					<button className={styles.create}>CREATE ACCOUNT</button>
				</Link>
			</div>
		</form>
	);
};
