import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { setIsChecked } from '../../redux/sneakersData/sneakersDataSlice';

import { TitleBrand } from '../TitleBrand/TitleBrand';
import { FilterBar } from '../FilterBar/FilterBar';
import { Selected } from '../Selected/Selected';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
	const dispatch = useDispatch();

	const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);
	const filterBrand = useSelector((state: RootState) => state.sneakersDataSlice.filterBrand);
	const filterModel = useSelector((state: RootState) => state.sneakersDataSlice.filterModel);
	const isChecked = useSelector((state: RootState) => state.sneakersDataSlice.isChecked);

	const updateSneakers = isChecked ? allSneakers.filter((sneakers) => sneakers.brand === filterBrand) : allSneakers;

	return (
		<div className={styles.wrapper}>
			<TitleBrand />
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.filter}>
						<div className={styles.filterWrap}>
							<p className={styles.title}>FILTER</p>
							{isChecked && (
								<p onClick={() => dispatch(setIsChecked(false))} className={styles.clear}>
									Clear Filters
								</p>
							)}
						</div>
						<FilterBar />
					</div>
					<div className={styles.sneakers}>
						<div className={styles.titleWrap}>
							<p className={styles.title}>
								RESULTS <span className={styles.quantity}>{updateSneakers.length}</span>
							</p>
							<Selected />
						</div>
						<ul className={styles.previewGroupe}>
							{updateSneakers &&
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
