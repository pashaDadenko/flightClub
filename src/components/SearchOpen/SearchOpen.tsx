import { RootState } from '../../redux/store';
import { SearchProps } from './TypeSearchOpen';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { setSearchValue } from '../../redux/searchSlice/searchSlice';
import { variantOverlay, variantSearch } from './SearchOpenVariants';

import styles from './SearchOpen.module.scss';

export const SearchOpen: FC<SearchProps> = ({ setSearchClick }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	const inputRef = useRef<HTMLInputElement>(null);
	inputRef.current?.focus();

	const filteredSneakers = allSneakers
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
					<input type='search' ref={inputRef} value={searchValue} placeholder='Search' className={styles.search} onChange={(e) => dispatch(setSearchValue(e.target.value))} onKeyDown={(e) => e.key === 'Enter' && navigate('/search-result')} />
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
								<Link to={'/air-jordan'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Air jordan</button>
								</Link>
								<Link to={'/new-balance'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>New Balance</button>
								</Link>
								<Link to={'/nike'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Nike</button>
								</Link>
								<Link to={'/off-white'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Off white</button>
								</Link>
								<Link to={'/yeezy'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Yeezy</button>
								</Link>
								<Link to={'/sneakers'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>More Brands</button>
								</Link>
							</div>
							<div className={styles.recommended}>
								<Link to={'/top-sellers'} onClick={() => setSearchClick(false)}>
									<button className={styles.button}>Top sellers</button>
								</Link>
								<Link to={'/lowest-price'} onClick={() => setSearchClick(false)}>
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
