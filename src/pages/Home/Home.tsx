import { FC } from 'react';

import { Header } from '../../components/Header/Header';
import { Nike } from '../../components/Nike/Nike';
import { OffWhite } from '../../components/OffWhite/OffWhite';
import { AirJordan } from '../../components/AirJordan/AirJordan';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { Footer } from '../../components/Footer/Footer';

import styles from './Home.module.scss';

export const Home: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Nike />
            <OffWhite />
            <AirJordan />
            <InfoBlock />
            <Footer />
        </div>
    );
};

// black brown cream grey green multi white red blue tan
