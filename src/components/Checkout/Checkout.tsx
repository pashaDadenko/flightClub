import { db } from '../../firebase';
import { FC, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { Shipping } from '../Shipping/Shipping';
import { Box, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setClearCart } from '../../redux/cartSlice/cartSlice';
import { ShippingFilled } from '../ShippingFilled/ShippingFilled';
import { ShippingMethod } from '../ShippingMethod/ShippingMethod';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import styles from './Checkout.module.scss';

export const Checkout: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
	const { email, fullNameReg } = useSelector((state: RootState) => state.userSlice);
	const totalPrice = cartItems.reduce((sum, sneaker) => sum + sneaker.price, 0);
	const standardShipping = useSelector((state: RootState) => state.shippingSlice.standardShipping);
	const { name, streetAddress, apartment, city, postalCode, telephone } = useSelector((state: RootState) => state.shippingSlice);

	const conditionalRender = name && streetAddress && apartment && city && postalCode && telephone;
	const orderTotalPrice = standardShipping !== undefined ? totalPrice + standardShipping : totalPrice + 40;
	const [currentOrderNumber, setCurrentOrderNumber] = useState(0);

	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
		dispatch(setClearCart());
		navigate('/');
	};

	const handleOpen = async () => {
		const auth = getAuth();
		const user = auth.currentUser;
		const uid = user!.uid;
		const sneaker = cartItems.map(({ images: [image], title, sizes }) => ({ image, title, sizes }));

		const ordersCollectionRef = collection(db, 'orders');

		const counterRef = doc(db, 'counters', 'orderNumberCounter');
		const counterDoc = await getDoc(counterRef);
		let currentOrderNumber = 1;
		if (counterDoc.exists()) {
			const data = counterDoc.data();
			currentOrderNumber = data.value || 1;
		}

		const orderData = {
			userId: uid,
			name: name,
			numberOrder: currentOrderNumber,
			orderTotalPrice: orderTotalPrice,
			sneakers: sneaker,
		};

		setCurrentOrderNumber(currentOrderNumber);
		const newOrderNumber = currentOrderNumber + 1;
		await setDoc(counterRef, { value: newOrderNumber });

		await addDoc(ordersCollectionRef, orderData);

		setOpen(true);
	};

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600,
		bgcolor: 'background.paper',
		border: '1px solid #000',
		textAlign: 'center',
		pt: 7,
		pb: 7,
	};

	return (
		<div className={styles.wrapper} style={open ? { opacity: 0.3 } : {}}>
			<div className={styles.containerLeft}>
				<div className={styles.accountWrap}>
					<div className={styles.flex}>
						<p>FLIGHT CLUB ACCOUNT</p>
						<CheckCircleOutlineOutlinedIcon className={styles.icon} />
					</div>
					<p className={styles.line}></p>
					<p className={styles.name}>{fullNameReg}</p>
					<p className={styles.email}>{email}</p>
				</div>

				{conditionalRender ? <ShippingFilled /> : <Shipping />}

				<ShippingMethod />

				<div className={styles.paymentWrap}>
					<div className={styles.flex}>
						<p>PAYMENT METHOD</p>
						<CheckCircleOutlineOutlinedIcon className={styles.icon} />
					</div>
					<p className={styles.line}></p>
					<p className={styles.text}>Payment is made to the in cash or by bank card to the courier.</p>
				</div>
			</div>

			<div className={styles.containerRight} style={cartItems.length < 3 ? { position: 'fixed', marginLeft: '520px' } : {}}>
				<div className={styles.orderWrap}>
					<p>ORDER SUMMARY</p>
					<p className={styles.line}></p>

					<div className={styles.sneakerWrap}>
						{cartItems &&
							cartItems.map((sneaker, index) => (
								<div className={styles.sneaker} key={index}>
									<div className={styles.flexBox}>
										<img className={styles.img} src={sneaker.images[0]} alt={sneaker.brand} />
										<div className={styles.flexInfo}>
											<p className={styles.name}>{sneaker.title}</p>
											<p className={styles.size}>US Size {sneaker.sizes}</p>
										</div>
										<p className={styles.price}>${sneaker.price}</p>
									</div>
								</div>
							))}
					</div>

					<div className={styles.totalInfoWrap}>
						<div className={styles.flexText}>
							<p>Subtotal</p>
							<p>Shipping</p>
							<p>Tax</p>
						</div>
						<div className={styles.flexPrice}>
							<p>${totalPrice}</p>
							<p>${standardShipping}</p>
							<p>$0</p>
						</div>
					</div>

					<div className={styles.totalWrap}>
						<p>Order Total</p>
						<p className={styles.price}>${orderTotalPrice}</p>
					</div>

					<p className={styles.text}>By clicking "place order", I acknowledge that I have read and agree to the Terms & Conditions and the Privacy Policy.</p>

					{conditionalRender ? (
						<button className={styles.buttonUpdate} onClick={handleOpen}>
							PLACE ORDER
						</button>
					) : (
						<button className={styles.button} disabled>
							PLACE ORDER
						</button>
					)}

					<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description' sx={{ backgroundColor: '#00000080' }}>
						<Box sx={style}>
							<Typography id='modal-modal-title' variant='h4' component='h2' sx={{ fontSize: 30, mb: 2 }}>
								{fullNameReg}, your order <span style={{ fontSize: 35, color: '#e91c23', display: 'inline-block' }}>{currentOrderNumber}</span> received.
							</Typography>
							<Typography id='modal-modal-description' variant='h6' component='h3' sx={{ fontSize: 20 }}>
								The letter has been sent to the email you provided during registration. Thank you for choosing FLIGHT CLUB.
							</Typography>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
};
