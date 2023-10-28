import { RootState } from '../../redux/store';
import { Selected } from '../Selected/Selected';
import { PATHS } from '../../root/routesConfig';
import { FC, useEffect, useState } from 'react';
import { FilterBar } from '../FilterBar/FilterBar';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsSneakers } from './AllSneakersVariants';
import { setClearFilter } from '../../redux/filterSlice/filterSlice';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const currentSort = useSelector((state: RootState) => state.sneakersSlice.currentSort);
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);
	const { valueBrand, valueModel, valueSizes, valueColor } = useSelector((state: RootState) => state.filterSlice.filterValues);

	const updateSneakers = allSneakers
		.filter((sneakers) => {
			const { brand, model, color, sizes, rating, price, title } = sneakers;

			const valueBrandSet = new Set(valueBrand);
			const valueModelSet = new Set(valueModel);
			const valueColorSet = new Set(valueColor);

			const pathnameFilter =
				{
					[PATHS.TOP_SELLERS]: () => rating > 0,
					[PATHS.OFF_WHITE]: () => brand === 'Off-white',
					[PATHS.AIR_JORDAN]: () => brand === 'Air jordan',
					[PATHS.NIKE]: () => brand === 'Nike',
					[PATHS.YEEZY]: () => brand === 'Yeezy',
					[PATHS.NEW_BALANCE]: () => brand === 'New balance',
					[PATHS.LOWEST_PRICE]: () => price < 300,
					[PATHS.NIKE_DUNK]: () => model === 'dunk',
					[PATHS.DARK_SHOES]: () => color === 'black',
					[PATHS.RAR_SHOES]: () => price > 1000,
					[PATHS.SEARCH_RESULT]: () => title.toLowerCase().includes(searchValue.toLowerCase()) || brand.toLowerCase().includes(searchValue.toLowerCase()),
				}[pathname] || (() => true);

			return (!valueBrandSet.size || valueBrandSet.has(brand)) && (!valueModelSet.size || valueModelSet.has(model)) && (!valueSizes.length || valueSizes.some((size) => sizes.includes(size))) && (!valueColorSet.size || valueColorSet.has(color)) && pathnameFilter();
		})
		.sort((a, b) => (currentSort === 'low' ? a.price - b.price : currentSort === 'high' ? b.price - a.price : currentSort === 'relevance' ? b.rating - a.rating : 0));

	const renderClearFiltersBtn = valueBrand.length > 0 || valueModel.length > 0 || valueSizes.length > 0 || valueColor.length > 0;

	const [activeBrand, setActiveBrand] = useState<{ [key: string]: boolean }>({});
	const [activeModel, setActiveModel] = useState<{ [key: string]: boolean }>({});
	const [activeSizes, setActiveSizes] = useState<{ [key: number]: boolean }>({});
	const [activeColors, setActiveColors] = useState<{ [key: string]: boolean }>({});
	const allFilters = [activeBrand, activeModel, activeSizes, activeColors];
	const [countFilters, setCountFilters] = useState<number>(0);

	useEffect(() => {
		const totalFilters = allFilters.reduce((count, filter) => count + Object.values(filter).filter(Boolean).length, 0);
		setCountFilters(totalFilters);
	}, [activeBrand, activeModel, activeSizes, activeColors, countFilters]);

	const clearFilters = () => {
		setActiveBrand({});
		setActiveModel({});
		setActiveSizes({});
		setActiveColors({});
	};

	const [visibleProducts, setVisibleProducts] = useState(6);
	const handleShowMore = () => setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [addFilters, setAddFilters] = useState(true);
	const [scrollLocked, setScrollLocked] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth <= 900) {
				setAddFilters(false);
			} else {
				setAddFilters(true);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (!scrollLocked) {
			if (addFilters && window.innerWidth <= 900) {
				document.body.style.overflow = 'hidden';
				setScrollLocked(true);
			}
		} else {
			if (!addFilters || window.innerWidth > 900) {
				document.body.style.overflow = 'auto';
				setScrollLocked(false);
			}
		}
		return () => {
			if (scrollLocked) {
				document.body.style.overflow = 'auto';
				setScrollLocked(false);
			}
		};
	}, [scrollLocked, addFilters]);

	const handleClick = () => {
		setAddFilters(true);
		window.scrollTo(0, 0);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.filter}>
						<div className={styles.add} onClick={handleClick}>
							{countFilters > 0 ? `${countFilters} FILTERS ADDED` : 'ADD FILTERS'}
						</div>
						<div className={styles.filterWrap}>
							<p className={styles.title}>FILTER</p>
							{renderClearFiltersBtn && (
								<p
									onClick={() => {
										dispatch(setClearFilter());
										clearFilters();
									}}
									className={styles.clear}>
									Clear Filters
								</p>
							)}
						</div>
						{addFilters && (
							<FilterBar
								updateSneakers={updateSneakers}
								activeBrand={activeBrand}
								activeModel={activeModel}
								activeSizes={activeSizes}
								activeColors={activeColors}
								setActiveBrand={setActiveBrand}
								setActiveModel={setActiveModel}
								setActiveSizes={setActiveSizes}
								setActiveColors={setActiveColors}
								setAddFilters={setAddFilters}
								renderClearFiltersBtn={renderClearFiltersBtn}
								clearFilters={clearFilters}
								windowWidth={windowWidth}
							/>
						)}
					</div>
					<div className={styles.sneakers}>
						<div className={styles.titleWrap}>
							<p className={styles.title}>
								RESULTS <span className={styles.quantity}>{updateSneakers.length > 0 ? updateSneakers.length : 0}</span>
							</p>
							<Selected />
						</div>
						<ul className={styles.previewGroupe}>
							<AnimatePresence>
								{updateSneakers &&
									updateSneakers.slice(0, visibleProducts).map((sneaker) => (
										<motion.div className={styles.previewProduct} key={sneaker.id} initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSneakers}>
											<Link to={`/details/${sneaker.id}`} className={styles.previewProduct}>
												<img className={styles.img} src={sneaker.images[0]} alt='image' />
												<div className={styles.info}>
													<p className={styles.subTitle}>{sneaker.brand}</p>
													<p className={styles.text}>{sneaker.title}</p>
													<p className={styles.price}>${sneaker.price}</p>
												</div>
											</Link>
										</motion.div>
									))}
							</AnimatePresence>
						</ul>
						{visibleProducts < updateSneakers.length && (
							<button onClick={handleShowMore} className={styles.button}>
								SHOW MORE
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
