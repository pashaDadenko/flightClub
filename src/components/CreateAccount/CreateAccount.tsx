import { db } from '../../firebase';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import { doc, setDoc } from 'firebase/firestore';
import { TypeCreateAccount } from './TypeCreateAccount';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setUser } from '../../redux/userSlice/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { setEdit } from '../../redux/shippingSlice/shippingSlice';
import { getAuth, createUserWithEmailAndPassword, OAuthCredential } from 'firebase/auth';

import styles from './CreateAccount.module.scss';

export const CreateAccount: FC = () => {
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
	} = useForm<TypeCreateAccount>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<TypeCreateAccount> = async (data) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				const newUser = user as unknown as OAuthCredential;
				const userDocRef = doc(db, 'users', user.uid);

				setDoc(userDocRef, {
					fullNameReg: data.fullNameReg,
					email: user.email,
					token: newUser.accessToken,
					id: user.uid,
				});

				dispatch(
					setUser({
						fullNameReg: data.fullNameReg,
						email: user.email,
						token: newUser.accessToken,
						id: user.uid,
					})
				);

				dispatch(setEdit());
				navigate(PATHS.MY_ACCOUNT);
			})
			.catch(() => (reset(), setAuthError('The user with this email is already registered')));
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
					<p>CREATE AN ACCOUNT</p>
					<p className={styles.line}></p>
					<div className={styles.wrap}>
						<p className={styles.title}>* Full name</p>
						{errors.fullNameReg && <p className={styles.error}>{errors.fullNameReg.message}</p>}
					</div>
					<input
						className={styles.input}
						{...register('fullNameReg', {
							pattern: {
								value: /^[а-яА-Яa-zA-Z]+(?:\s[а-яА-Яa-zA-Z]+)?$/,
								message: 'Full name is not valid.',
							},
						})}
					/>
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
					<div className={styles.wrap}>
						<p className={styles.title}>* Password</p>
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
					{isValid && watch('fullNameReg') && watch('email') && watch('password') ? (
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
					<Link className={styles.link} to={PATHS.LOGIN}>
						<button className={styles.login}>LOGIN</button>
					</Link>
				</div>
			</form>
		</>
	);
};
