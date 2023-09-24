import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TypeShipping } from './TypeShipping';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setShipping } from '../../redux/shippingSlice/shippingSlice';

import styles from './Shipping.module.scss';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase';

export const Shipping: FC = () => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<TypeShipping>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<TypeShipping> = async (data) => {
		const auth = getAuth();
		const user = auth.currentUser;
		const uid = user!.uid;
		const userDocRef = doc(db, 'users', uid);

		const dataShip = {
			name: data.name,
			streetAddress: data.streetAddress,
			apartment: data.apartment,
			city: data.city,
			postalCode: data.postalCode,
			telephone: data.telephone,
			
		};

		const userDoc = await getDoc(userDocRef);
		const userData = userDoc.data();
		const mergedData = { ...userData, ...dataShip };
		await updateDoc(userDocRef, mergedData);

		dispatch(setShipping(dataShip));
	};

	const renderButton = isValid && watch('name') && watch('streetAddress') && watch('apartment') && watch('city') && watch('postalCode') && watch('telephone');

	return (
		<form className={styles.shippingWrap} onSubmit={handleSubmit(onSubmit)}>
			<p>SHIPPING ADDRESS</p>
			<p className={styles.line}></p>

			<div className={styles.wrap}>
				<p className={styles.title}>* Full name</p>
				{errors.name && <p className={styles.error}>{errors.name.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('name', {
					pattern: {
						value: /^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/gi,
						message: 'Full name is not valid.',
					},
				})}
			/>

			<div className={styles.wrap}>
				<p className={styles.title}>* Street Address</p>
				{errors.streetAddress && <p className={styles.error}>{errors.streetAddress.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('streetAddress', {
					pattern: {
						value: /^[а-яА-Яa-zA-Z0-9]*(?: [а-яА-Яa-zA-Z0-9]*)?$/gi,
						message: 'Street address is not valid.',
					},
				})}
			/>

			<div className={styles.wrap}>
				<p className={styles.title}>* Apartment, Suite, Unit, Building, Floor, etc.</p>
				{errors.apartment && <p className={styles.error}>{errors.apartment.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('apartment', {
					pattern: {
						value: /^[а-яА-Яa-zA-Z0-9]*(?: [а-яА-Яa-zA-Z0-9.,]*){0,6}$/gi,
						message: 'Apartment is not valid.',
					},
				})}
			/>

			<div className={styles.wrap}>
				<p className={styles.title}>* City</p>
				{errors.city && <p className={styles.error}>{errors.city.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('city', {
					pattern: {
						value: /[а-яА-Яa-zA-Z\- ]{1,}(?: [а-яА-Яa-zA-Z\- ]{1,})?$/gi,
						message: 'City is not valid.',
					},
				})}
			/>

			<div className={styles.wrap}>
				<p className={styles.title}>* Zip / Postal Code</p>
				{errors.postalCode && <p className={styles.error}>{errors.postalCode.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('postalCode', {
					pattern: {
						value: /^\d{6}$/i,
						message: 'Postal code is not valid.',
					},
				})}
			/>

			<div className={styles.wrap}>
				<p className={styles.title}>* Telephone</p>
				{errors.telephone && <p className={styles.error}>{errors.telephone.message}</p>}
			</div>
			<input
				className={styles.input}
				{...register('telephone', {
					pattern: {
						value: /^(?:\+7|8)(?:[-\s]?\d){10}$/gi,
						message: 'Telephone is not valid.',
					},
				})}
			/>

			{renderButton ? (
				<button className={styles.buttonUpdate}>CONTINUE</button>
			) : (
				<button className={styles.button} disabled>
					CONTINUE
				</button>
			)}
		</form>
	);
};
