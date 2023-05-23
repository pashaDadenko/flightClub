import { FC } from 'react';

import test from '../../images/1.jpg';

import styles from './Nike.module.scss';

export const Nike: FC = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>NIKE</h2>
            <ul className={styles.previewGroupe}>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
                <li className={styles.previewProduct}>
                    <img className={styles.img} src={test} alt='' />
                    <div className={styles.info}>
                        <span className={styles.subTitle}>air jordan</span>
                        <p className={styles.text}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</p>
                    </div>
                </li>
            </ul>

            <button className={styles.btn}>SHOP NIKE</button>
        </section>
    );
};
