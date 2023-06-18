import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useParams } from 'react-router-dom';

import styles from './RecommendedBlock.module.scss';

export const RecommendedBlock: FC = () => {
    const { id } = useParams();
    const recommendedSneakers = useSelector((state: RootState) => state.sneakersDataSlice.recommendedSneakers.filter((item) => item.id !== +id!));

    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h2 className={styles.title}>RECOMMENDED FOR YOU</h2>
                <ul className={styles.previewGroupe}>
                    {recommendedSneakers &&
                        recommendedSneakers.map((sneaker) => (
                            <Link
                                to={`/details/${sneaker.id}`}
                                key={sneaker.id}
                                className={styles.previewProduct}
                                onClick={() => window.scrollTo(0, 0)}>
                                <img className={styles.img} src={sneaker.images[0]} alt='image' />
                                <div className={styles.info}>
                                    <span className={styles.subTitle}>{sneaker.brand}</span>
                                    <p className={styles.text}>{sneaker.title}</p>
                                </div>
                            </Link>
                        ))}
                </ul>
            </section>
        </div>
    );
};
