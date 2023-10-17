import { useDispatch } from 'react-redux';
import { Search } from '../Search/Search';
import { useAuth } from '../../hooks/useAuth';
import { SearchOpen } from '../SearchOpen/SearchOpen';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { setRemoveUser } from '../../redux/userSlice/userSlice';
import backgroundImgMob from '../../images/backgroundImgMob.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import backgroundImgDesc from '../../images/backgroundImgDesc.jpg';
import { variantAccount, variantCart, variantOrders, variantOut, variantUp, variantWrap } from './HeaderVariants';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const screenReduction = useMediaQuery('(max-width: 900px)');

	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	const styleHeaderIMG: CSSProperties = {
		backgroundImage: `url(${screenReduction ? backgroundImgMob : backgroundImgDesc})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: screenReduction ? '90vh' : '100vh',
		position: 'relative',
	};

	const scrollBack = pathname === '/' && scroll < document.documentElement.clientHeight ? { backgroundColor: '#ffffff00' } : { backgroundColor: '#fff' };
	const scrollColor = pathname === '/' && scroll < document.documentElement.clientHeight ? { color: '#fff' } : {};

	const singOutClick = () => {
		dispatch(setRemoveUser());
		navigate('/');
	};

	return (
		<header style={pathname === '/' ? styleHeaderIMG : { height: '100px' }}>
			<div className={styles.wrapper} style={scrollBack}>
				{!isClicked && (
					<div onClick={() => setIsClicked(true)} className={styles.mediaS} style={scrollColor}>
						Search
					</div>
				)}
				{isClicked ? <SearchOpen setIsClicked={setIsClicked} /> : <Search setIsClicked={setIsClicked} scroll={scroll} />}
				{!isClicked && (
					<Link className={styles.logo} to={'/'}>
						FLIGHT CLUB
					</Link>
				)}
				{!isClicked && (
					<div className={styles.listing}>
						<Link className={styles.item} style={scrollColor} to={'/sneakers'}>
							Sneakers
						</Link>
						<Link className={styles.item} style={scrollColor} to={'/store-location'}>
							Store
						</Link>
						<div className={styles.accountWrap} style={scrollColor} onMouseLeave={() => setIsHovered(false)}>
							<Link to={''} className={styles.item} style={isHovered ? { color: '#33322f49' } : scrollColor} onMouseEnter={() => setIsHovered(true)}>
								Account
							</Link>
							<AnimatePresence>
								{isHovered && (
									<motion.div className={styles.wrap} style={scrollBack} initial={'initial'} animate={'animate'} exit={'exit'} variants={variantWrap}>
										<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantAccount}>
											<Link to={isAuth ? '/my-account' : '/login'} className={styles.item} style={scrollColor}>
												My Account
											</Link>
										</motion.div>
										<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOrders}>
											<Link className={styles.item} style={scrollColor} to={isAuth ? '/my-orders' : '/login'}>
												My Orders
											</Link>
										</motion.div>
										<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantCart}>
											<Link className={styles.item} style={scrollColor} to={'/my-cart'}>
												My Cart
											</Link>
										</motion.div>
										{isAuth ? (
											<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOut}>
												<Link to={''} className={styles.item} style={scrollColor} onClick={singOutClick}>
													Sing Out
												</Link>
											</motion.div>
										) : (
											<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantUp}>
												<Link className={styles.item} style={scrollColor} to={'/login'}>
													Sing Up
												</Link>
											</motion.div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				)}
				{!isClicked && (
					<div className={styles.mediaM} style={scrollColor}>
						Menu
					</div>
				)}
			</div>
			{pathname === '/' && (
				<div className={styles.previewWrapper}>
					<h1 className={styles.previewName}>AIR JORDAN 1 RETRO HIGH OG 'MAUVE'</h1>
					<Link to={'details/51'} className={styles.previewShow}>
						Shop Now
					</Link>
				</div>
			)}
		</header>
	);
};
