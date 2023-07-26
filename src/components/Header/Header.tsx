import { CSSProperties, FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Search } from '../Search/Search';
import { SearchOpen } from '../SearchOpen/SearchOpen';

import backgroundImg from '../../images/backgroundImg.jpg';

import styles from './Header.module.scss';

export const Header: FC = () => {
	const { pathname } = useLocation();
	const [scroll, setScroll] = useState(0);
	const handleScroll = () => setScroll(window.scrollY);

	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const styleHeaderIMG: CSSProperties = {
		backgroundImage: `url(${backgroundImg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		position: 'relative',
	};

	return (
		<header style={pathname === '/' ? styleHeaderIMG : { height: '100px' }}>
			<div
				style={pathname === '/' && scroll < document.documentElement.clientHeight ? { backgroundColor: '#ffffff00' } : {}}
				className={styles.headerTop}>
				{isClicked ? <SearchOpen setIsClicked={setIsClicked} /> : <Search setIsClicked={setIsClicked} />}

				{!isClicked && (
					<Link className={styles.logo} to={'/'}>
						FLIGHT CLUB
					</Link>
				)}

				{!isClicked && (
					<div className={styles.listing}>
						<Link className={styles.sneakers} to={'/sneakers'}>
							Sneakers
						</Link>
						<Link className={styles.store} to={'/store-location'}>
							Store
						</Link>
						<Link className={styles.cart} to={''}>
							Cart
						</Link>
						<Link className={styles.account} to={'/my-account'}>
							Account
						</Link>
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
