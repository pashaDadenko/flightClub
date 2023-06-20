import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import { TitleBrand } from '../TitleBrand/TitleBrand';
import { FilterBrand } from '../FilterBrand/FilterBrand';
import { Selected } from '../Selected/Selected';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
    const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);

    return (
        <div className={styles.wrapper}>
            <TitleBrand />
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.filter}>
                        <div className={styles.filterWrap}>
                            <p className={styles.title}>FILTER</p>
                            <p className={styles.clear}>Clear Filters</p>
                        </div>
                        <FilterBrand />
                    </div>
                    <div className={styles.sneakers}>
                        <div className={styles.titleWrap}>
                            <p className={styles.title}>
                                RESULTS <span className={styles.quantity}>{allSneakers.length}</span>
                            </p>
                            <Selected />
                        </div>
                        <ul className={styles.previewGroupe}>
                            {allSneakers &&
                                allSneakers.map((sneaker) => (
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
