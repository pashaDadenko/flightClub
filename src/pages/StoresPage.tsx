import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Stores } from '../components/Stores/Stores';

export const StoresPage: FC = () => {
    return (
        <>
            <Header />
            <Stores />
            <Footer />
        </>
    );
};
