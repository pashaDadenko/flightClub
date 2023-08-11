import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice/userSlice';
import { getAuth, createUserWithEmailAndPassword, OAuthCredential } from 'firebase/auth';

import styles from './CreateAccount.module.scss';

export const CreateAccount: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleCreate = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
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
			.catch(console.error);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p>CREATE AN ACCOUNT</p>
				<p className={styles.line}></p>

				<p className={styles.title}>* Email Address</p>
				<input className={styles.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

				<p className={styles.title}>* Password</p>
				<input className={styles.input} type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

				{email && password ? (
					<button onClick={() => handleCreate(email, password)} className={styles.createUpdate}>
						CREATE ACCOUNT
					</button>
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
		</div>
	);
};
