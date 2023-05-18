import { FC } from 'react';

import storeImg from '../../images/STORES.jpg';
import historyImg from '../../images/HISTORY.jpg';
import styles from './InfoBlock.module.scss';

export const InfoBlock: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.store}>
                    <img className={styles.storeImg} src={storeImg} alt='store' />
                    <h2 className={styles.titleStore}>FLIGHT CLUB STORES</h2>
                    <p className={styles.textStore}>
                        With three retail locations in <a>New York</a>, <a>Los Angeles</a>, and <a>Miami</a>, Flight Club remains the premier source
                        for everything sneakers.
                    </p>
                    <p className={styles.link}>Learn More</p>
                </div>
                <div className={styles.history}>
                    <img className={styles.historyImg} src={historyImg} alt='history' />
                    <h2 className={styles.titleHistory}>OUR HISTORY</h2>
                    <p className={styles.textHistory}>
                        For over a decade, Flight Club has changed the landscape of sneaker retail. Carrying every brand name on the market, Flight
                        Club has evolved from a one-stop sneaker destination, to a cultural hub for sneaker enthusiasts and novices alike.From{' '}
                        <a>Air Jordans</a> to <a>Nike</a> to <a>Adidas</a> and more, we have it all.
                    </p>
                    <p className={styles.link}>Learn More</p>
                </div>
            </div>
        </div>
    );
};
