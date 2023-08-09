import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteSneakers } from '../../redux/sneakersData/sneakersDataSlice';

import ClearIcon from '@mui/icons-material/Clear';
import styles from './MyCart.module.scss';

export const MyCart: FC = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector((state: RootState) => state.sneakersDataSlice.cartItems);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>MY CART</h2>

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
								</div>
								<div className={styles.flex}>
									<p className={styles.price}>${sneaker.price}</p>
									<ClearIcon onClick={() => dispatch(deleteSneakers(index))} className={styles.clear} />
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
