import { FC } from 'react';
import { api } from '../api/api';

import { Header } from '../components/Header/Header';
import { DetailsSneakers } from '../components/DetailsSneakers/DetailsSneakers';
import { RecommendedBlock } from '../components/RecommendedBlock/RecommendedBlock';
import { Footer } from '../components/Footer/Footer';

export const DetailsPage: FC = () => {
    api();
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <DetailsSneakers />
            <RecommendedBlock />
            <Footer />
        </>
    );
};
