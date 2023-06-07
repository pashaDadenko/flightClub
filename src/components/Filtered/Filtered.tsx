import { FC } from 'react';

import styles from './Filtered.module.scss';

export const Filtered: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>FILTER</h3>
        </div>
    );
};
