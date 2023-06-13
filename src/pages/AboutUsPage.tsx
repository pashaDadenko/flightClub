import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { AboutUs } from '../components/AboutUs/AboutUs';

export const AboutUsPage: FC = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Footer />
        </>
    );
};
