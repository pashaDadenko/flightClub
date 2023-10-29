import { useDispatch } from 'react-redux';
import { Search } from '../Search/Search';
import { PATHS } from '../../root/routesConfig';
import { MenuOpen } from '../MenuOpen/MenuOpen';
import { SearchOpen } from '../SearchOpen/SearchOpen';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { HeaderAccount } from '../HeaderAccount/HeaderAccount';
import { setRemoveUser } from '../../redux/userSlice/userSlice';
import backgroundImgMob from '../../images/backgroundImgMob.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import backgroundImgDesc from '../../images/backgroundImgDesc.jpg';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const screenReduction = useMediaQuery('(max-width: 900px)');

	const [searchClick, setSearchClick] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

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

	const scrollBack = pathname === PATHS.HOME && scroll < document.documentElement.clientHeight ? { backgroundColor: '#ffffff00' } : { backgroundColor: '#fff' };
	const scrollColor = pathname === PATHS.HOME && scroll < document.documentElement.clientHeight ? { color: '#fff' } : {};

	const singOutClick = () => {
		dispatch(setRemoveUser());
		navigate(PATHS.HOME);
	};

	return (
		<header style={pathname === PATHS.HOME ? styleHeaderIMG : { height: '100px' }}>
			<div className={styles.wrapper} style={scrollBack}>
				{!searchClick && (
					<div onClick={() => setSearchClick(true)} className={styles.mediaS} style={scrollColor}>
						Search
					</div>
				)}

				{searchClick ? <SearchOpen setSearchClick={setSearchClick} /> : <Search setSearchClick={setSearchClick} scroll={scroll} />}

				{!searchClick && (
					<Link className={styles.logo} to={PATHS.HOME}>
						FLIGHT CLUB
					</Link>
				)}

				{!searchClick && (
					<div className={styles.listing}>
						<Link className={styles.item} style={scrollColor} to={PATHS.SNEAKERS}>
							Sneakers
						</Link>
						<Link className={styles.item} style={scrollColor} to={PATHS.STORE_LOCATION}>
							Store
						</Link>
						<HeaderAccount scrollColor={scrollColor} scrollBack={scrollBack} singOutClick={singOutClick} />
					</div>
				)}

				{!searchClick && (
					<div className={styles.mediaM} onClick={() => setMenuOpen(true)} style={scrollColor}>
						Menu
					</div>
				)}

				{menuOpen && <MenuOpen setMenuOpen={setMenuOpen} singOutClick={singOutClick} />}
			</div>
			{pathname === PATHS.HOME && (
				<div className={styles.previewWrapper}>
					<h1 className={styles.previewName}>AIR JORDAN 1 RETRO HIGH OG 'MAUVE'</h1>
					<Link to={'/details/51'} className={styles.previewShow}>
						Shop Now
					</Link>
				</div>
			)}
		</header>
	);
};
