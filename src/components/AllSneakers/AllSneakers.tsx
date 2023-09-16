import { FC, useState } from 'react';
import { RootState } from '../../redux/store';
import { Selected } from '../Selected/Selected';
import { FilterBar } from '../FilterBar/FilterBar';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { SkeletonSneakers } from '../Skeleton/SkeletonSneakers';
import { setClearFilter } from '../../redux/filterSlice/filterSlice';
import { variantsImg, variantsP, variantsSneakers, variantsSpan } from './AllSneakersVariants';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);
	const { valueBrand, valueModel, valueSizes, valueColor } = useSelector((state: RootState) => state.filterSlice.filterValues);

	let updateSneakers = allSneakers.filter((sneakers) => {
		const { brand, model, color, sizes } = sneakers;

		const brandFilterMatch = valueBrand.length === 0 || valueBrand.includes(brand);
		const modelFilterMatch = valueModel.length === 0 || valueModel.includes(model);
		const sizeFilterMatch = valueSizes.length === 0 || valueSizes.some((size) => sizes.includes(size));
		const colorFilterMatch = valueColor.length === 0 || valueColor.includes(color);

		return brandFilterMatch && modelFilterMatch && sizeFilterMatch && colorFilterMatch;
	});

	if (pathname === '/top-sellers') updateSneakers = updateSneakers.sort((a, b) => b.rating - a.rating);
	if (pathname === '/off-white') updateSneakers = updateSneakers.filter((item) => item.brand === 'Off-white');
	if (pathname === '/air-jordan') updateSneakers = updateSneakers.filter((item) => item.brand === 'Air jordan');
	if (pathname === '/nike') updateSneakers = updateSneakers.filter((item) => item.brand === 'Nike');
	if (pathname === '/yeezy') updateSneakers = updateSneakers.filter((item) => item.brand === 'Yeezy');
	if (pathname === '/new-balance') updateSneakers = updateSneakers.filter((item) => item.brand === 'New balance');
	if (pathname === '/lowest-price') updateSneakers = updateSneakers.filter((item) => item.price < 300);
	if (pathname === '/nike-dunk') updateSneakers = updateSneakers.filter((item) => item.model === 'dunk');
	if (pathname === '/dark-shoes') updateSneakers = updateSneakers.filter((item) => item.color === 'black');
	if (pathname === '/rar-shoes') updateSneakers = updateSneakers.filter((item) => item.price > 1000);
	if (pathname === '/search-result')
		updateSneakers = updateSneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase()) || sneaker.brand.toLowerCase().includes(searchValue.toLowerCase()));

	const renderClearFiltersBtn = valueBrand.length > 0 || valueModel.length > 0 || valueSizes.length > 0 || valueColor.length > 0;

	const [activeBrand, setActiveBrand] = useState<{ [key: string]: boolean }>({});
	const [activeModel, setActiveModel] = useState<{ [key: string]: boolean }>({});
	const [activeSizes, setActiveSizes] = useState<{ [key: number]: boolean }>({});
	const [activeColors, setActiveColors] = useState<{ [key: string]: boolean }>({});

	const clearFilters = () => {
		setActiveBrand({});
		setActiveModel({});
		setActiveSizes({});
		setActiveColors({});
	};

	const [visibleProducts, setVisibleProducts] = useState(9);
	const handleShowMore = () => setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.filter}>
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
						/>
					</div>
					<div className={styles.sneakers}>
						<div className={styles.titleWrap}>
							<p className={styles.title}>
								RESULTS <span className={styles.quantity}>{updateSneakers.length > 0 ? updateSneakers.length : allSneakers.length}</span>
							</p>
							<Selected />
						</div>
						<ul className={styles.previewGroupe}>
							<AnimatePresence>
								{updateSneakers.length > 0 ? (
									updateSneakers.slice(0, visibleProducts).map((sneaker) => (
										<motion.div className={styles.previewProduct} key={sneaker.id} initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSneakers}>
											<Link to={`/details/${sneaker.id}`} className={styles.previewProduct}>
												<motion.img className={styles.img} src={sneaker.images[0]} alt='image' initial={'initial'} animate={'animate'} variants={variantsImg} />
												<div className={styles.info}>
													<motion.span className={styles.subTitle} initial={'initial'} animate={'animate'} variants={variantsSpan}>
														{sneaker.brand}
													</motion.span>
													<motion.p className={styles.text} initial={'initial'} animate={'animate'} variants={variantsP}>
														{sneaker.title}
													</motion.p>
													<motion.p className={styles.price} initial={'initial'} animate={'animate'} variants={variantsSpan}>
														${sneaker.price}
													</motion.p>
												</div>
											</Link>
										</motion.div>
									))
								) : (
									<SkeletonSneakers />
								)}
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
