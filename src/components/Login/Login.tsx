import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice/userSlice';
import { OAuthCredential, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Login.module.scss';

export const Login: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
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
				setEmail('');
				setPassword('');
				alert('Email or password not correct.');
			});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p>LOGIN</p>

				<p className={styles.line}></p>

				<p className={styles.title}>Email Address</p>
				<input className={styles.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

				<p className={styles.title}>Password</p>
				<input className={styles.input} type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

				{email && password ? (
					<button onClick={() => handleLogin(email, password)} className={styles.loginUpdate}>
						LOGIN
					</button>
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
		</div>
	);
};
