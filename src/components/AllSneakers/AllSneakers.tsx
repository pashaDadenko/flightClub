import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import { TypeFilters } from './TypeAllSneakers';

import { TitleBrand } from '../TitleBrand/TitleBrand';
import { FilterBar } from '../FilterBar/FilterBar';
import { Selected } from '../Selected/Selected';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
	const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);

	const valueBrand = [...new Set(useSelector((state: RootState) => state.sneakersDataSlice.valueBrand))];
	const valueModel = [...new Set(useSelector((state: RootState) => state.sneakersDataSlice.valueModel))];
	const valueColor = [...new Set(useSelector((state: RootState) => state.sneakersDataSlice.valueColor))];

	const [filters, setFilters] = useState<TypeFilters>({
		brand: valueBrand,
		model: ['air'],
		color: ['black'],
	});

	const handleClearFilters = () => {
		setFilters({
			brand: [],
			model: [],
			color: [],
		});
	};

	const updateSneakers = allSneakers.filter((sneakers) => {
		const { brand, model, color } = sneakers;
		const brandFilterMatch = filters.brand.length === 0 || filters.brand.includes(brand);
		const modelFilterMatch = filters.model.length === 0 || filters.model.includes(model);
		const colorFilterMatch = filters.color.length === 0 || filters.color.includes(color);
		return brandFilterMatch && modelFilterMatch && colorFilterMatch;
	});

	const renderClearFiltersBtn = filters.brand.length > 0 || filters.model.length > 0 || filters.color.length > 0;

	return (
		<div className={styles.wrapper}>
			<TitleBrand />
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.filter}>
						<div className={styles.filterWrap}>
							<p className={styles.title}>FILTER</p>
							{renderClearFiltersBtn && (
								<p onClick={handleClearFilters} className={styles.clear}>
									Clear Filters
								</p>
							)}
						</div>
						<FilterBar updateSneakers={updateSneakers} />
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
