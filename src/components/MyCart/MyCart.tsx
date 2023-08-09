import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSneakers } from '../../redux/cartSlice/cartSlice';

import ClearIcon from '@mui/icons-material/Clear';
import styles from './MyCart.module.scss';

export const MyCart: FC = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);

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

				<div className={styles.buttonWrap}>
					<Link className={styles.link} to={'/sneakers'}>
						<button className={styles.btn}>BACK TO SHOP</button>
					</Link>
					<Link className={styles.link} to={''}>
						<button className={styles.btn}>CHECKOUT</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
