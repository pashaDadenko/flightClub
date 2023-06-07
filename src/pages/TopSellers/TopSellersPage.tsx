import { FC } from 'react';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Api } from '../../api/Api';
import { TopSellersFull } from '../../components/TopSellersFull/TopSellersFull';
import { Filtered } from '../../components/Filtered/Filtered';

import styles from './TopSellersPage.module.scss';

export const TopSellersPage: FC = () => {
    Api();

    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.container}>
                <h2 className={styles.title}>TOP SELLERS</h2>

                <div className={styles.wrap}>
                    <Filtered />
                    <TopSellersFull />
                </div>
            </div>

            <Footer />
        </div>
    );
};
