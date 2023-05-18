import { FC } from 'react';

import styles from './FooterBot.module.scss';

export const FooterBot: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.list}>Terms</div>
                <div className={styles.list}>Privacy</div>
                <div className={styles.list}>Press</div>
                <div className={styles.list}>Jobs</div>
            </div>

            <div className={styles.text}>© 2023 Flight Club New York LLC. All Rights Reserved</div>
            <div className={styles.currency}>Russia / USD</div>
        </div>
    );
};
