import { useDispatch } from 'react-redux';
import { setSneakersData } from '../redux/home/homeSlice';
import { setRandomSneakers } from '../redux/error/errorSlice';
import { setTopSellersData } from '../redux/topSellers/topSellersSlice';
import { useEffect } from 'react';
import { TypeApi } from './TypeApi';

export const Api = () => {
    const dispatch = useDispatch();

    const URL_DATA: string = 'https://646cb4927b42c06c3b2bd66e.mockapi.io/sneakersData';

    useEffect(() => {
        fetch(URL_DATA)
            .then((res) => res.json())
            .then((data: TypeApi[]) => {
                dispatch(setRandomSneakers(data));
                dispatch(setTopSellersData(data));
                dispatch(setSneakersData(data));
            });
    }, []);
};
