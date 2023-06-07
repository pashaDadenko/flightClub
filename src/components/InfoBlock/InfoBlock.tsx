import { FC } from 'react';
import { Link } from 'react-router-dom';

import storeImg from '../../images/stores.jpg';
import historyImg from '../../images/history.jpg';
import styles from './InfoBlock.module.scss';

export const InfoBlock: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.store}>
                    <Link to={'store-location'}>
                        <img className={styles.storeImg} src={storeImg} alt='store' />
                    </Link>
                    <h2 className={styles.titleStore}>FLIGHT CLUB STORES</h2>
                    <p className={styles.textStore}>
                        With three retail locations in <Link to={'store-location'}>New York</Link>, <Link to={'store-location'}>Los Angeles</Link>, and{' '}
                        <Link to={'store-location'}>Miami</Link>, Flight Club remains the premier source for everything sneakers.
                    </p>
                    <Link className={styles.link} to={'store-location'}>
                        Learn More
                    </Link>
                </div>

                <div className={styles.history}>
                    <Link to={'about-us'}>
                        <img className={styles.historyImg} src={historyImg} alt='history' />
                    </Link>
                    <h2 className={styles.titleHistory}>OUR HISTORY</h2>
                    <p className={styles.textHistory}>
                        For over a decade, Flight Club has changed the landscape of sneaker retail. Carrying every brand name on the market, Flight
                        Club has evolved from a one-stop sneaker destination, to a cultural hub for sneaker enthusiasts and novices alike.From{' '}
                        <a>Air Jordans</a> to <a>Nike</a> to <a>Adidas</a> and more, we have it all.
                    </p>
                    <Link className={styles.link} to={'about-us'}>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};
