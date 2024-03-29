import { RootState } from '../../redux/store';
import { SearchProps } from './TypeSearchOpen';
import { PATHS } from '../../root/routesConfig';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGetSneakersQuery } from '../../redux/api/api';
import { setSearchValue } from '../../redux/searchSlice/searchSlice';
import { variantOverlay, variantSearch } from './SearchOpenVariants';

import styles from './SearchOpen.module.scss';

export const SearchOpen: FC<SearchProps> = ({ setSearchClick }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data = [] } = useGetSneakersQuery('');

	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	const inputRef = useRef<HTMLInputElement>(null);
	inputRef.current?.focus();

	const filteredSneakers = data
		.filter((sneaker) => {
			const title = sneaker.title.toLowerCase().includes(searchValue.toLowerCase());
			const brand = sneaker.brand.toLowerCase().includes(searchValue.toLowerCase());
			return title || brand;
		})
		.sort((a, b) => b.rating - a.rating);

	const [scrollLocked, setScrollLocked] = useState(false);

	useEffect(() => {
		if (!scrollLocked) {
			document.body.style.overflow = 'hidden';
			setScrollLocked(true);
		}
		return () => {
			if (scrollLocked) {
				document.body.style.overflow = 'auto';
				setScrollLocked(false);
			}
		};
	}, [scrollLocked]);

	return (
		<AnimatePresence>
			<motion.div className={styles.wrapper} key='search' initial={'initial'} animate={'animate'} exit={'exit'} variants={variantSearch}>
				<div className={styles.wrapSearch}>
					<SearchIcon className={styles.icon} />
					<input type='search' ref={inputRef} value={searchValue} placeholder='Search' className={styles.search} onChange={(e) => dispatch(setSearchValue(e.target.value))} onKeyDown={(e) => e.key === 'Enter' && navigate(PATHS.SEARCH_RESULT)} />
					<button style={searchValue ? { color: '#000' } : { pointerEvents: 'none' }} className={styles.buttonClear} onClick={() => dispatch(setSearchValue(''))}>
						Clear
					</button>
					<div className={styles.line}></div>
					<button className={styles.buttonClose} onClick={() => setSearchClick(false)}>
						Close
					</button>
				</div>
				<div className={styles.wrapSearchBottom}>
					<div className={styles.left}>
						{filteredSneakers.length > 0 ? <p className={styles.title}>Popular</p> : <p className={styles.title}>No Result</p>}
						<ul className={styles.previewGroupe}>
							{filteredSneakers &&
								filteredSneakers.slice(0, 8).map((sneaker) => (
									<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct} onClick={() => setSearchClick(false)}>
										<img className={styles.img} src={sneaker.images[0]} alt='image' />
										<p className={styles.text}>{sneaker.title}</p>
									</Link>
								))}
						</ul>
					</div>
					<div className={styles.right}>
						<p className={styles.title}>Categories</p>
						<div className={styles.wrap}>
							<div className={styles.brand}>
								<Link to={PATHS.AIR_JORDAN} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Air jordan</button>
								</Link>
								<Link to={PATHS.NEW_BALANCE} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>New Balance</button>
								</Link>
								<Link to={PATHS.NIKE} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Nike</button>
								</Link>
								<Link to={PATHS.OFF_WHITE} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Off white</button>
								</Link>
								<Link to={PATHS.YEEZY} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Yeezy</button>
								</Link>
								<Link to={PATHS.SNEAKERS} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>More Brands</button>
								</Link>
							</div>
							<div className={styles.recommended}>
								<Link to={PATHS.TOP_SELLERS} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Top sellers</button>
								</Link>
								<Link to={PATHS.LOWEST_PRICE} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Lowest price</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div className={styles.overlay} onClick={() => setSearchClick(false)} key='overlay' initial={'initial'} animate={'animate'} exit={'exit'} variants={variantOverlay}></motion.div>
		</AnimatePresence>
	);
};
