import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Shipping } from '../Shipping/Shipping';
import { ShippingFilled } from '../ShippingFilled/ShippingFilled';
import { ShippingMethod } from '../ShippingMethod/ShippingMethod';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import styles from './Checkout.module.scss';

export const Checkout: FC = () => {
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
	const { fullName, email } = useSelector((state: RootState) => state.userSlice);
	const totalPrice = cartItems.reduce((sum, sneaker) => sum + sneaker.price, 0);
	const standardShipping = useSelector((state: RootState) => state.shippingSlice.standardShipping);
	const { name, streetAddress, apartment, city, postalCode, telephone } = useSelector((state: RootState) => state.shippingSlice);

	const conditionalRender = name && streetAddress && apartment && city && postalCode && telephone;

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerLeft}>
				<div className={styles.accountWrap}>
					<div className={styles.flex}>
						<p>FLIGHT CLUB ACCOUNT</p>
						<CheckCircleOutlineOutlinedIcon className={styles.icon} />
					</div>
					<p className={styles.line}></p>
					<p className={styles.name}>{fullName}</p>
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
						<p className={styles.price}>${totalPrice + 40}</p>
					</div>

					<p className={styles.text}>
						By clicking "place order", I acknowledge that I have read and agree to the Terms & Conditions and the Privacy Policy.
					</p>

					{conditionalRender ? (
						<button className={styles.buttonUpdate}>PLACE ORDER</button>
					) : (
						<button className={styles.button} disabled>
							PLACE ORDER
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
