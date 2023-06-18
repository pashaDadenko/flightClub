import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import styles from './OffWhiteBlock.module.scss';

export const OffWhiteBlock: FC = () => {
    const offWhite = useSelector((state: RootState) => state.sneakersDataSlice.offWhiteData);

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>OFF WHITE</h2>
            <ul className={styles.previewGroupe}>
                {offWhite &&
                    offWhite.map((sneaker) => (
                        <Link to={`/details/${sneaker.id}`} key={sneaker.id} className={styles.previewProduct}>
                            <img className={styles.img} src={sneaker.images[0]} alt='image' />
                            <div className={styles.info}>
                                <span className={styles.subTitle}>{sneaker.brand}</span>
                                <p className={styles.text}>{sneaker.title}</p>
                            </div>
                        </Link>
                    ))}
            </ul>

            <button className={styles.btn}>SHOP OFF WHITE</button>
        </section>
    );
};
