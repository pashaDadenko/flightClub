import qs from 'qs';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

export const queryString = () => {
	const navigate = useNavigate();
	const { valueBrand, valueModel, valueSizes, valueColor } = useSelector((state: RootState) => state.filterSlice.filterValues);

	useEffect(() => {
		const queryString = qs.stringify({
			brand: valueBrand,
			model: valueModel,
			size: valueSizes,
			color: valueColor,
		});
		navigate(`?${queryString}`);
	}, [valueBrand, valueModel, valueSizes, valueColor]);
};
