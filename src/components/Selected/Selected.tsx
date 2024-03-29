import { FC } from 'react';
import Select from 'react-select';
import { TypeOptions } from './TypeSelected';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSort } from '../../redux/sneakersSlice/sneakersSlice';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './Selected.module.scss';
import './styleSelected.scss';

export const Selected: FC = () => {
	const currentSort = useSelector((state: RootState) => state.sneakersSlice.currentSort);
	const dispatch = useDispatch();

	const options: TypeOptions[] = [
		{ value: 'relevance', label: 'Relevance' },
		{ value: 'low', label: 'Price low' },
		{ value: 'high', label: 'Price high' },
	];

	const getValue = () => (currentSort ? options.find((item) => item.value === currentSort) : '');
	const handlerChange = (newValue: any) => dispatch(setCurrentSort(newValue.value));

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Sort By:</span>
			<Select options={options} onChange={handlerChange} value={getValue()} isSearchable={false} classNamePrefix='styleSelect' />
			<KeyboardArrowDownIcon className={styles.icon} />
		</div>
	);
};
