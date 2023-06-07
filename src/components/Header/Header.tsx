import { CSSProperties, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import backgroundImg from '../../images/backgroundImg.jpg';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const { pathname } = useLocation();

    const styleHeader: CSSProperties = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
    };

    return (
        <>
            <header style={pathname === '/' ? styleHeader : { height: '100px', backgroundColor: '#fff' }}>
                <div className={styles.headerTop}>
                    <div className={styles.searchWrapper}>
                        <input className={styles.search} type='search' placeholder='Search' />
                        <SearchIcon className={styles.icon} />
                    </div>
                    <Link className={styles.logo} to={'/'}>
                        FLIGHT CLUB
                    </Link>

                    <div className={styles.listing}>
                        <Link className={styles.sneakers} to={''}>
                            Sneakers
                        </Link>
                        <Link className={styles.store} to={'store-location'}>
                            Store
                        </Link>
                        <Link className={styles.cart} to={''}>
                            Cart
                        </Link>
                    </div>
                </div>
                {pathname === '/' && (
                    <div className={styles.previewWrapper}>
                        <h1 className={styles.previewName}>WMNS AIR JORDAN 11 RETRO LOW 'YELLOW SNAKESKIN'</h1>
                        <h2 className={styles.previewShow}>Shop Now</h2>
                    </div>
                )}
            </header>
        </>
    );
};
