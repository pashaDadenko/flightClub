import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './Checkout.module.scss';

export const Checkout: FC = () => {
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
	const { fullName, email } = useSelector((state: RootState) => state.userSlice);
	const totalPrice = cartItems.reduce((sum, sneaker) => sum + sneaker.price, 0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerLeft}>
				<div className={styles.accountWrap}>
					<p>FLIGHT CLUB ACCOUNT</p>
					<p className={styles.line}></p>
					<p className={styles.name}>{fullName}</p>
					<p className={styles.email}>{email}</p>
				</div>

				<div className={styles.shippingWrap}>
					<p>SHIPPING ADDRESS</p>
					<p className={styles.line}></p>
					<p className={styles.title}>* Full Name</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* Street Address</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* Apartment, Suite, Unit, Building, Floor, etc.</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* City</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* Zip / Postal Code</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* Telephone</p>
					<input className={styles.input} type='text' />

					<button className={styles.button}>CONTINUE</button>
				</div>

				<div className={styles.paymentWrap}>
					<p>PAYMENT METHOD</p>
					<p className={styles.line}></p>

					<p className={styles.title}>* Name on Card</p>
					<input className={styles.input} type='text' />
					<p className={styles.title}>* Credit Card</p>
					<div className={styles.inputWrap}>
						<input className={styles.cardNumber} placeholder='Card number' type='text' maxLength={16} />
						<input className={styles.mm_yy} placeholder='MM/YY' type='text' maxLength={4} />
						<input className={styles.cvc} placeholder='CVC' type='text' maxLength={3} />
					</div>

					<button className={styles.button}>CONTINUE</button>
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
							<p>$40</p>
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

					<button className={styles.button}>PLACE ORDER</button>
				</div>
			</div>
		</div>
	);
};
