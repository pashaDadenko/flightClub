import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import styles from './AllSneakers.module.scss';

export const AllSneakers: FC = () => {
    const allSneakers = useSelector((state: RootState) => state.errorSlice.randomSneakers);

    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h2 className={styles.title}>ALL SNEAKERS</h2>
                <ul className={styles.previewGroupe}>
                    {allSneakers &&
                        allSneakers.map((sneaker) => (
                            <Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
                                <img className={styles.img} src={sneaker.images[0]} alt='image' />
                                <div className={styles.info}>
                                    <span className={styles.subTitle}>{sneaker.brand}</span>
                                    <p className={styles.text}>{sneaker.title}</p>
                                </div>
                            </Link>
                        ))}
                </ul>

                <button className={styles.btn}>SHOP ALL SNEAKERS</button>
            </section>
        </div>
    );
};
