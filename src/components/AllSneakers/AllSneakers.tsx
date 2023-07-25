import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useLocation } from 'react-router-dom';

import { FilterBar } from '../FilterBar/FilterBar';
import { Selected } from '../Selected/Selected';
import { setClearFilter } from '../../redux/sneakersData/sneakersDataSlice';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);
	const { valueBrand, valueModel, valueColor } = useSelector((state: RootState) => state.sneakersDataSlice.filterValues);

	let updateSneakers = allSneakers.filter((sneakers) => {
		const { brand, model, color } = sneakers;
		const brandFilterMatch = valueBrand.length === 0 || valueBrand.includes(brand);
		const modelFilterMatch = valueModel.length === 0 || valueModel.includes(model);
		const colorFilterMatch = valueColor.length === 0 || valueColor.includes(color);
		return brandFilterMatch && modelFilterMatch && colorFilterMatch;
	});

	if (pathname === '/top-sellers') updateSneakers = updateSneakers.sort((a, b) => b.rating - a.rating);
	if (pathname === '/off-white') updateSneakers = updateSneakers.filter((item) => item.brand === 'Off-white');
	if (pathname === '/air-jordan') updateSneakers = updateSneakers.filter((item) => item.brand === 'Air jordan');
	if (pathname === '/nike') updateSneakers = updateSneakers.filter((item) => item.brand === 'Nike');
	if (pathname === '/yeezy') updateSneakers = updateSneakers.filter((item) => item.brand === 'Yeezy');
	if (pathname === '/new-balance') updateSneakers = updateSneakers.filter((item) => item.brand === 'New balance');

	const renderClearFiltersBtn = valueBrand.length > 0 || valueModel.length > 0 || valueColor.length > 0;

	const [activeBrand, setActiveBrand] = useState<{ [key: number]: boolean }>({});
	const [activeModel, setActiveModel] = useState<{ [key: number]: boolean }>({});
	const [activeColors, setActiveColors] = useState<{ [key: number]: boolean }>({});

	const clearActiveColor = () => {
		setActiveBrand({});
		setActiveModel({});
		setActiveColors({});
	};

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
										clearActiveColor();
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
							activeColors={activeColors}
							setActiveBrand={setActiveBrand}
							setActiveModel={setActiveModel}
							setActiveColors={setActiveColors}
						/>
					</div>
					<div className={styles.sneakers}>
						<div className={styles.titleWrap}>
							<p className={styles.title}>
								RESULTS{' '}
								<span className={styles.quantity}>{updateSneakers.length > 0 ? updateSneakers.length : allSneakers.length}</span>
							</p>
							<Selected />
						</div>
						<ul className={styles.previewGroupe}>
							{updateSneakers.length > 0 &&
								updateSneakers.map((sneaker) => (
									<Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
										<img className={styles.img} src={sneaker.images[0]} alt='image' />
										<div className={styles.info}>
											<span className={styles.subTitle}>{sneaker.brand}</span>
											<p className={styles.text}>{sneaker.title}</p>
											<p className={styles.price}>${sneaker.price}</p>
										</div>
									</Link>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
