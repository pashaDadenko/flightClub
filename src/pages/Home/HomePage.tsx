import { FC } from 'react';
import { Api } from '../../api/Api';

import { Header } from '../../components/Header/Header';
import { TopSellers } from '../../components/TopSellers/TopSellers';
import { OffWhite } from '../../components/OffWhite/OffWhite';
import { AirJordan } from '../../components/AirJordan/AirJordan';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { Footer } from '../../components/Footer/Footer';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
    Api();

    return (
        <div className={styles.wrapper}>
            <Header />
            <TopSellers />
            <OffWhite />
            <AirJordan />
            <InfoBlock />
            <Footer />
        </div>
    );
};
