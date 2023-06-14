import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { ShippingAndReturns } from '../components/ShippingAndReturns/ShippingAndReturns';
import { Footer } from '../components/Footer/Footer';

export const ShippingAndReturnsPage: FC = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <ShippingAndReturns />
            <Footer />
        </>
    );
};
