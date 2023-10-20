import { TypeApi } from '../../api/TypeApi';
import { RootState } from '../../redux/store';
import { FC, useEffect, useState } from 'react';
import { Carousel } from '../Carousel/Carousel';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DetailsAccordion } from '../DetailsAccordion/DetailsAccordion';
import { setCartItems, setSize } from '../../redux/cartSlice/cartSlice';
import { variantOverlay, variantSizes } from './DetailsSneakersVariants';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { setBrand, setImageCarousel, setTitle } from '../../redux/sneakersSlice/sneakersSlice';

import styles from './DetailsSneakers.module.scss';

export const DetailsSneakers: FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const screenReduction = useMediaQuery('(max-width: 900px)');

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const detailsSneakers = allSneakers.filter((item) => item.id === +id!);
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);
	const size = useSelector((state: RootState) => state.cartSlice.size);

	const brand = detailsSneakers.length > 0 && detailsSneakers[0].brand;
	typeof brand === 'string' && dispatch(setBrand(brand));

	const images = detailsSneakers.length > 0 && detailsSneakers[0].images;
	Array.isArray(images) && dispatch(setImageCarousel(images));

	const title = detailsSneakers.length > 0 && detailsSneakers[0].title;
	typeof title === 'string' && dispatch(setTitle(title));

	const buttonClick = (item: TypeApi) => {
		dispatch(setCartItems(item));
		dispatch(setSize(0));
	};

	const [activeSize, setActiveSize] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 900) {
				setActiveSize(false);
			} else {
				setActiveSize(true);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const selectSizeHandler = (activeSize: boolean) => {
		setActiveSize(activeSize ? true : false);
		document.body.style.overflow = activeSize ? 'hidden' : 'auto';
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrapMob}>
					<span className={styles.brandMob}>{brand}</span>
					<h2 className={styles.titleMob}>{title}</h2>
				</div>
				{detailsSneakers &&
					detailsSneakers.map((item) => (
						<div className={styles.wrap} key={item.id}>
							<Carousel />
							<div className={styles.infoWrap}>
								<span className={styles.brand}>{item.brand}</span>
								<h2 className={styles.title}>{item.title}</h2>
								<p className={styles.selectSize}>SELECT US SIZE</p>
								<button className={styles.btnMob} onClick={() => selectSizeHandler(!activeSize)}>
									<motion.p className={styles.price} whileTap={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
										${item.price}
									</motion.p>
								</button>
								{activeSize && (
									<AnimatePresence>
										<motion.div className={styles.overlay} onClick={() => selectSizeHandler(!activeSize)} key='overlay' initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOverlay}></motion.div>
										<motion.div className={styles.boxMob} key='sizes' initial={'initial'} animate={'animate'} exit={'exit'} variants={screenReduction ? variantSizes : {}}>
											<div className={styles.wrapTopMob}>
												<h2 className={styles.titleMob}>{item.title}</h2>
												<CloseIcon className={styles.iconMob} onClick={() => selectSizeHandler(!activeSize)} />
											</div>
											<p className={styles.selectSizeMob}>US SIZE</p>
											<div className={styles.sizeWrap}>
												{item.sizes.map((size, index) => (
													<button onClick={() => dispatch(setSize(size))} className={styles.size} key={index}>
														{size}
													</button>
												))}
											</div>
											<div className={styles.lineMob}></div>
											<p className={styles.buy}>ADD TO CART</p>
											<div className={styles.buttonWrap}>
												<button onClick={() => size > 0 && buttonClick(item)} className={styles.btn}>
													<motion.p className={styles.price} whileTap={size > 0 ? { scale: 1.3 } : {}} transition={{ duration: 0.2 }}>
														${item.price}
													</motion.p>
												</button>
												<Link style={cartItems.length === 0 ? { pointerEvents: 'none' } : {}} className={styles.link} to={'/my-cart'} onClick={() => selectSizeHandler(!activeSize)}>
													<div className={styles.icon}>{cartItems.length > 0 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}</div>
													<p style={cartItems.length > 0 ? { opacity: '1' } : { opacity: 0 }} className={styles.count}>
														{cartItems.length}
													</p>
												</Link>
											</div>
										</motion.div>
									</AnimatePresence>
								)}
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
