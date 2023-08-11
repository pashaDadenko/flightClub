import { FC } from 'react';
import { api } from '../api/api';

import { Header } from '../components/Header/Header';
import { NotFound } from '../components/NotFound/NotFound';
import { AllSneakersBlock } from '../components/AllSneakersBlock/AllSneakersBlock';
import { Footer } from '../components/Footer/Footer';

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
