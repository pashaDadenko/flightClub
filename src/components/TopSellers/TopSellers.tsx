import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import styles from './TopSellers.module.scss';

export const TopSellers: FC = () => {
    const topSellers = useSelector((state: RootState) => state.homeSlice.topSellersData);

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>TOP SELLERS</h2>
            <ul className={styles.previewGroupe}>
                {topSellers &&
                    topSellers.map((sneaker) => (
                        <Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
                            <img className={styles.img} src={sneaker.images[0]} alt='image' />
                            <div className={styles.info}>
                                <span className={styles.subTitle}>{sneaker.brand}</span>
                                <p className={styles.text}>{sneaker.title}</p>
                            </div>
                        </Link>
                    ))}
            </ul>

            <Link className={styles.link} to={''}>
                <button className={styles.btn}>SHOP TOP SELLERS</button>
            </Link>
        </section>
    );
};
