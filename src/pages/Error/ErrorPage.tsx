import { FC } from 'react';
import { Api } from '../../api/Api';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { AllSneakers } from '../../components/AllSneakers/AllSneakers';

import notFoundImage from '../../images/notFound.png';

import styles from './ErrorPage.module.scss';

export const ErrorPage: FC = () => {
    Api();

    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.container}>
                <div>
                    <h2 className={styles.title}>404 - PAGE NOT FOUND</h2>
                    <p className={styles.text}>
                        Sorry, we could not find this page. Please search again or navigate to the home page to find what you are looking for.
                    </p>
                </div>
                <img src={notFoundImage} alt='notFoundImage' />
            </div>

            <AllSneakers />
            <Footer />
        </div>
    );
};
