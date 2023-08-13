import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FooterBot } from '../FooterBot/FooterBot';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Link className={styles.logo} to={'/'}>
                    FLIGHT CLUB
                </Link>
                <div className={styles.wrapper}>
                    <div className={styles.wrap}>
                        <div className={styles.title}>Trending</div>
                        <div className={styles.subTitle}>Air Jordans</div>
                        <div className={styles.subTitle}>Nike Dunks</div>
                        <div className={styles.subTitle}>Panda Shoes</div>
                        <div className={styles.subTitle}>Travis Scott Shoes</div>
                        <div className={styles.subTitle}>Bad Bunny x adidas</div>
                        <div className={styles.subTitle}>Pink Dunks</div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.title}>New Releases</div>
                        <div className={styles.subTitle}>Air Jordan 4 'Thunder' 2023</div>
                        <div className={styles.subTitle}>Air Jordan 5 'Craft'</div>
                        <div className={styles.subTitle}>Wmns Air Jordan 3 'Lucky Green'</div>
                        <div className={styles.subTitle}>Wmns Nike Dunk Low 'Rose Whisper' restock</div>
                        <div className={styles.subTitle}>Marvel x Air Jordan 1 High 'Next Chapter'</div>
                        <div className={styles.subTitle}>Air Jordan 1 High 'Naija'</div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.title}>Account</div>
                        <div className={styles.subTitle}>My Account</div>
                        <div className={styles.subTitle}>Track My Order</div>
                        <div className={styles.subTitle}>Sell Sneakers</div>
                        <div className={styles.subTitle}>Cookie Settings</div>
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.title}>About Us</div>
                        <div className={styles.subTitle}>Our History</div>
                        <div className={styles.subTitle}>Stores</div>
                        <div className={styles.subTitle}>Shipping & Returns</div>
                        <div className={styles.subTitle}>Support</div>
                        <div className={styles.subTitle}>Instagram</div>
                        <div className={styles.subTitle}>Facebook</div>
                        <div className={styles.subTitle}>Twitter</div>
                    </div>
                </div>
            </footer>
            <FooterBot />
        </>
    );
};
