import { FC } from 'react';

import { TypeHeaderList } from './TypeHeader';

import SearchIcon from '@mui/icons-material/Search';
import backgroundImg from '../../images/backgroundImg.jpg';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const headerList: TypeHeaderList = ['Sneakers', 'Store', 'Account'];

    return (
        <>
            <header
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.searchWrapper}>
                        <input className={styles.search} type='search' placeholder='Search' />
                        <SearchIcon className={styles.icon} />
                    </div>
                    <div className={styles.logo}>FLIGHT CLUB</div>
                    <ul className={styles.listWrapper}>
                        {headerList.map((list: string, index: number) => (
                            <li className={styles.list} key={index}>
                                {list}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.previewWrapper}>
                    <h1 className={styles.previewName}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</h1>
                    <h2 className={styles.previewShow}>Shop Now</h2>
                </div>
            </header>
        </>
    );
};
