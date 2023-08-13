import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { NotFound } from '../components/NotFound/NotFound';
import { AllSneakersBlock } from '../components/AllSneakersBlock/AllSneakersBlock';

export const ErrorPage: FC = () => {
    api();
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <NotFound />
            <AllSneakersBlock />
            <Footer />
        </>
    );
};
