import { FC } from 'react';

import notFoundImage from '../../images/notFound.png';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <h2 className={styles.title}>404 - PAGE NOT FOUND</h2>
                    <p className={styles.text}>
                        Sorry, we could not find this page. Please search again or navigate to the home page to find what you are looking for.
                    </p>
                </div>
                <img src={notFoundImage} alt='notFoundImage' />
            </div>
        </div>
    );
};
