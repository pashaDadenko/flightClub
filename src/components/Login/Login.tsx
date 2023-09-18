import { FC, useState } from 'react';
import { TypeLogin } from './TypeLogin';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setUser } from '../../redux/userSlice/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { OAuthCredential, fetchSignInMethodsForEmail, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Login.module.scss';

export const FormLogin: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [authError, setAuthError] = useState<string | null>(null);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm<TypeLogin>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<TypeLogin> = async (data) => {
		const auth = getAuth();
		const methods = await fetchSignInMethodsForEmail(auth, data.email);

		methods.length > 0
			? signInWithEmailAndPassword(auth, data.email, data.password)
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
						setAuthError('Email or password not correct.');
					})
			: reset(),
			setAuthError('The user with this email is not registered');
	};

	return (
		<>
			{authError && (
				<p className={styles.authError}>
					<HighlightOffIcon /> {authError}
				</p>
			)}

			<form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.container}>
					<p>LOGIN</p>
					<p className={styles.line}></p>

					<div className={styles.wrap}>
						<p className={styles.title}>Email Address</p>
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

					<div className={styles.wrap}>
						<p className={styles.title}>Password</p>
						{errors.password && <p className={styles.error}>{errors.password.message}</p>}
					</div>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							type={showPassword ? 'text' : 'password'}
							{...register('password', {
								pattern: {
									value: /^[a-z0-9]{6,}$/i,
									message: 'Password is not valid.',
								},
							})}
						/>
						{watch('password') && (
							<span className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
							</span>
						)}
					</div>

					<Link to={'/forgot-password'} className={styles.forgot}>
						Forgot Password?
					</Link>

					{isValid && watch('email') && watch('password') ? (
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
		</>
	);
};
