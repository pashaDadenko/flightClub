import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { AboutUs } from '../components/AboutUs/AboutUs';

export const AboutUsPage: FC = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <AboutUs />
            <Footer />
        </>
    );
};
