import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './TopSellersFull.module.scss';

export const TopSellersFull: FC = () => {
    const topSellersData = useSelector((state: RootState) => state.topSellersSlice.topSellersData);

    return (
        <div className={styles.wrapper}>
            <div>topSellersData</div>
        </div>
    );
};
