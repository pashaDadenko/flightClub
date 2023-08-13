import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TypeCreateAccount } from './TypeCreateAccount';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setUser } from '../../redux/userSlice/userSlice';
import { getAuth, createUserWithEmailAndPassword, OAuthCredential } from 'firebase/auth';

import styles from './CreateAccount.module.scss';

export const CreateAccount: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm<TypeCreateAccount>({ mode: 'onChange' });

	const email = watch('email');
	const password = watch('password');
	const fullName = watch('fullName');

	const onSubmit: SubmitHandler<TypeCreateAccount> = (data) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				const newUser = user as unknown as OAuthCredential;
				dispatch(
					setUser({
						fullName: fullName,
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
				<p>CREATE AN ACCOUNT</p>
				<p className={styles.line}></p>

				<div className={styles.fullNameWrap}>
					<p className={styles.fullName}>* Full name</p>
					{errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
				</div>
				<input
					className={styles.input}
					{...register('fullName', {
						pattern: {
							value: /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/gi,
							message: 'Full name is not valid.',
						},
					})}
				/>

				<div className={styles.emailWrap}>
					<p className={styles.email}>* Email Address</p>
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
					<p className={styles.password}>* Password</p>
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

				{isValid && fullName && email && password ? (
					<button className={styles.createUpdate}>CREATE ACCOUNT</button>
				) : (
					<button className={styles.create} disabled>
						CREATE ACCOUNT
					</button>
				)}

				<div className={styles.flex}>
					<div className={styles.miniLine}></div>
					<p className={styles.already}>ALREADY HAVE AN ACCOUNT?</p>
					<div className={styles.miniLine}></div>
				</div>

				<Link className={styles.link} to={'/login'}>
					<button className={styles.login}>LOGIN</button>
				</Link>
			</div>
		</form>
	);
};
