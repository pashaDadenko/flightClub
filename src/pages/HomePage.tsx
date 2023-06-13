import { FC } from 'react';
import { Api } from '../api/Api';

import { Header } from '../components/Header/Header';
import { TopSellers } from '../components/TopSellers/TopSellers';
import { OffWhite } from '../components/OffWhite/OffWhite';
import { AirJordan } from '../components/AirJordan/AirJordan';
import { InfoBlock } from '../components/InfoBlock/InfoBlock';
import { Footer } from '../components/Footer/Footer';

export const HomePage: FC = () => {
    Api();
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <TopSellers />
            <OffWhite />
            <AirJordan />
            <InfoBlock />
            <Footer />
        </>
    );
};
