import { useEffect } from 'react';
import { TypeApi } from './TypeApi';
import { useDispatch } from 'react-redux';

import { setSneakersData } from '../redux/home/homeSlice';
import { setRandomSneakers } from '../redux/error/errorSlice';
import { setDetailsSneakers } from '../redux/details/detailsSlice';
import { setAllSneakers } from '../redux/allSneakers/allSneakersSlice';

export const Api = (): void => {
    const dispatch = useDispatch();

    const URL_DATA: string = 'https://646cb4927b42c06c3b2bd66e.mockapi.io/sneakersData';

    useEffect(() => {
        fetch(URL_DATA)
            .then((res: Response) => res.json())
            .then((data: TypeApi[]) => {
                dispatch(setRandomSneakers(data));
                dispatch(setSneakersData(data));
                dispatch(setDetailsSneakers(data));
                dispatch(setAllSneakers(data));
            });
    }, []);
};
