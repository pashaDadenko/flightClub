import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useAuth } from '../../hooks/useAuth';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSneakers, setClearCart } from '../../redux/cartSlice/cartSlice';

import styles from './MyCart.module.scss';

export const MyCart: FC = () => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();

	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
	const totalPrice = cartItems.reduce((sum, sneaker) => sum + sneaker.price, 0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY CART</h2>
				<div className={styles.sneakerWrap}>
					{cartItems &&
						cartItems.map((sneaker, index) => (
							<div className={styles.sneaker} key={index}>
								<div className={styles.flexBox}>
									<Link to={`/details/${sneaker.id}`}>
										<img className={styles.img} src={sneaker.images[0]} alt={sneaker.brand} />
									</Link>
									<div className={styles.flexInfo}>
										<p className={styles.name}>{sneaker.title}</p>
										<p className={styles.size}>US Size {sneaker.sizes}</p>
										<p className={styles.brand}>{sneaker.brand}</p>
									</div>
								</div>
								<div className={styles.flex}>
									<p className={styles.price}>${sneaker.price}</p>
									<ClearIcon onClick={() => dispatch(deleteSneakers(index))} className={styles.clear} />
								</div>
							</div>
						))}
				</div>
				<div className={styles.priceWrap}>
					<p className={styles.priceText}>TOTAL PRICE:</p>
					<div className={styles.priceBox}>
						<span className={styles.price}>${totalPrice}</span>
						<button className={styles.clear} onClick={() => dispatch(setClearCart())}>
							Clear Cart
						</button>
					</div>
				</div>
				<div className={styles.buttonWrap}>
					<Link className={styles.link} to={'/sneakers'}>
						BACK TO SHOP
					</Link>
					<Link className={styles.link} to={isAuth ? '/checkout' : '/login'}>
						CHECKOUT
					</Link>
				</div>
			</div>
		</div>
	);
};
