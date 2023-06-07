import { FC } from 'react';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import imageStore from '../../images/aboutUs.png';
import styles from './AboutUsPage.module.scss';

export const AboutUsPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.container}>
                <div>
                    <h2 className={styles.title}>ABOUT US</h2>
                    <p className={styles.text}>
                        Established in New York City over fifteen years ago, Flight Club revolutionized sneaker retail as the original consignment
                        store for rare shoes. Carrying the rarest exclusives and collectible sneakers, Flight Club has evolved from a one-stop sneaker
                        destination, to a cultural hub for sneaker enthusiasts and novices alike. With three brick-and-mortar locations in New York
                        City, Los Angeles and Miami, Flight Club remains the premier source for authentic, rare sneakers.
                    </p>
                </div>

                <img className={styles.image} src={imageStore} alt='imageStore' />
            </div>

            <Footer />
        </div>
    );
};
