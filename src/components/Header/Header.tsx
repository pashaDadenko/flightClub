import { useDispatch } from 'react-redux';
import { Search } from '../Search/Search';
import { useAuth } from '../../hooks/useAuth';
import { SearchOpen } from '../SearchOpen/SearchOpen';
import backgroundImg from '../../images/backgroundImg.jpg';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { setRemoveUser } from '../../redux/userSlice/userSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isClicked, setIsClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	const styleHeaderIMG: CSSProperties = {
		backgroundImage: `url(${backgroundImg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
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
			<div className={styles.headerTop} style={scrollBack}>
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
							<button className={styles.item} style={isHovered ? { color: '#33322f49' } : scrollColor} onMouseEnter={() => setIsHovered(true)}>
								Account
							</button>
							{isHovered && (
								<div className={styles.wrap} style={scrollBack}>
									<Link to={isAuth ? '/my-account' : '/login'} className={styles.item} style={scrollColor}>
										My Account
									</Link>

									<Link className={styles.item} style={scrollColor} to={'/my-cart'}>
										My Cart
									</Link>

									{isAuth ? (
										<button className={styles.item} style={scrollColor} onClick={singOutClick}>
											Sing Out
										</button>
									) : (
										<Link className={styles.item} style={scrollColor} to={'/login'}>
											Sing Up
										</Link>
									)}
								</div>
							)}
						</div>
					</div>
				)}
			</div>

			{pathname === '/' && (
				<div className={styles.previewWrapper}>
					<h1 className={styles.previewName}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</h1>
					<Link to={'details/30'} className={styles.previewShow}>
						Shop Now
					</Link>
				</div>
			)}
		</header>
	);
};
