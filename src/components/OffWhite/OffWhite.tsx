import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './OffWhite.module.scss';

export const OffWhite: FC = () => {
    const offWhite = useSelector((state: RootState) => state.homeSlice.offWhiteData);

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>OFF WHITE</h2>
            <ul className={styles.previewGroupe}>
                {offWhite &&
                    offWhite.map((sneaker) => (
                        <li key={sneaker.id} className={styles.previewProduct}>
                            <img className={styles.img} src={sneaker.images[0]} alt='image' />
                            <div className={styles.info}>
                                <span className={styles.subTitle}>{sneaker.brand}</span>
                                <p className={styles.text}>{sneaker.title}</p>
                            </div>
                        </li>
                    ))}
            </ul>

            <button className={styles.btn}>SHOP OFF WHITE</button>
        </section>
    );
};
