import { FC } from 'react';
import { TypeApi } from '../../api/TypeApi';
import { RootState } from '../../redux/store';
import { Carousel } from '../Carousel/Carousel';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DetailsAccordion } from '../DetailsAccordion/DetailsAccordion';
import { setCartItems, setSize } from '../../redux/cartSlice/cartSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { setBrand, setImageCarousel } from '../../redux/sneakersSlice/sneakersSlice';

import styles from './DetailsSneakers.module.scss';

export const DetailsSneakers: FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const detailsSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers).filter((item) => item.id === +id!);
	const size = useSelector((state: RootState) => state.cartSlice.size);
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);

	const brand = detailsSneakers.length > 0 && detailsSneakers[0].brand;
	typeof brand === 'string' && dispatch(setBrand(brand));

	const images = detailsSneakers.length > 0 && detailsSneakers[0].images;
	Array.isArray(images) && dispatch(setImageCarousel(images));

	const buttonClick = (item: TypeApi) => {
		dispatch(setCartItems(item));
		dispatch(setSize(0));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{detailsSneakers &&
					detailsSneakers.map((item) => (
						<div className={styles.wrap} key={item.id}>
							<Carousel />

							<div className={styles.infoWrap}>
								<span className={styles.brand}>{item.brand}</span>
								<h2 className={styles.title}>{item.title}</h2>
								<p className={styles.selectSize}>SELECT US SIZE</p>
								<div className={styles.sizeWrap}>
									{item.sizes.map((size, index) => (
										<button onClick={() => dispatch(setSize(size))} className={styles.size} key={index}>
											{size}
										</button>
									))}
								</div>
								<p className={styles.buy}>ADD TO CART</p>
								<div className={styles.buttonWrap}>
									<button onClick={() => size > 0 && buttonClick(item)} className={styles.btn}>
										${item.price}
									</button>
									<Link style={cartItems.length === 0 ? { pointerEvents: 'none' } : {}} className={styles.link} to={'/my-cart'}>
										<div className={styles.icon}>
											{cartItems.length > 0 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
										</div>
										<p style={cartItems.length > 0 ? { opacity: '1' } : { opacity: 0 }} className={styles.count}>
											{cartItems.length}
										</p>
									</Link>
								</div>
								<div className={styles.line}></div>
								<div className={styles.about}>ABOUT THIS PRODUCT</div>
								<div className={styles.InfoProduct}>{item.InfoProduct}</div>
								<div className={styles.article}>{item.article}</div>

								<DetailsAccordion />
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
