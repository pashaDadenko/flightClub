import { format } from 'date-fns';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { Shipping } from '../Shipping/Shipping';
import { FC, useEffect, useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setClearCart } from '../../redux/cartSlice/cartSlice';
import { addOrder } from '../../redux/ordersSlice/ordersSlice';
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

	const conditionalRender = name && streetAddress && apartment && city && postalCode && telephone && cartItems.length > 0;
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
		if (!user) return;
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
			email: email,
			telephone: telephone,
			numberOrder: currentOrderNumber,
			sneakers: sneaker,
			city: city,
			streetAddress: streetAddress,
			apartment: apartment,
			postalCode: postalCode,
			orderTotalPrice: orderTotalPrice,
			orderDate: format(new Date(), 'd MMMM'),
		};

		setCurrentOrderNumber(currentOrderNumber);
		const newOrderNumber = currentOrderNumber + 1;
		await setDoc(counterRef, { value: newOrderNumber });
		await addDoc(ordersCollectionRef, orderData);
		dispatch(addOrder(orderData));
		setOpen(true);
	};

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleResize = () => setWindowWidth(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: windowWidth <= 700 ? 300 : 600,
		bgcolor: 'background.paper',
		border: '1px solid #000',
		textAlign: 'center',
		p: windowWidth <= 700 ? 2 : 7,
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
			<div className={styles.containerRight}>
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
							<Typography id='modal-modal-title' variant='h4' component='h2' sx={{ fontSize: windowWidth <= 700 ? 20 : 30, mb: windowWidth <= 700 ? 1 : 2 }}>
								{fullNameReg}, your order <span style={{ fontSize: windowWidth <= 700 ? 25 : 35, color: '#e91c23', display: 'inline-block' }}>{currentOrderNumber}</span> received.
							</Typography>
							<Typography id='modal-modal-description' variant='h6' component='h3' sx={{ fontSize: windowWidth <= 700 ? 15 : 20 }}>
								The letter has been sent to the email you provided during registration. Thank you for choosing FLIGHT CLUB.
							</Typography>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
};
