import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { DetailsSneakers } from '../components/DetailsSneakers/DetailsSneakers';
import { RecommendedBlock } from '../components/RecommendedBlock/RecommendedBlock';

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
