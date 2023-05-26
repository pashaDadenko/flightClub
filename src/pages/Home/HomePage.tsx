import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSneakersData } from '../../redux/homeSlice/homeSlice';
import { TypeApi } from './TypeHomePage';

import { Header } from '../../components/Header/Header';
import { TopSellers } from '../../components/TopSellers/TopSellers';
import { OffWhite } from '../../components/OffWhite/OffWhite';
import { AirJordan } from '../../components/AirJordan/AirJordan';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import { Footer } from '../../components/Footer/Footer';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://646cb4927b42c06c3b2bd66e.mockapi.io/sneakersData')
            .then((res) => res.json())
            .then((data: TypeApi[]) => dispatch(setSneakersData(data)));
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <TopSellers />
            <OffWhite />
            <AirJordan />
            <InfoBlock />
            <Footer />
        </div>
    );
};
