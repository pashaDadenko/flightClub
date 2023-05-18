import { FC } from 'react';

import { Header } from '../../components/Header/Header';
import { NewReleases } from '../../components/NewReleases/NewReleases';
import { TopSellers } from '../../components/TopSellers/TopSellers';
import { DynamicBlock } from '../../components/DynamicBlock/DynamicBlock';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { Footer } from '../../components/Footer/Footer';

import styles from './Home.module.scss';

export const Home: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <NewReleases />
            <TopSellers />
            <DynamicBlock />
            <InfoBlock />
            <Footer />
        </div>
    );
};
