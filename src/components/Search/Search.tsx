import { FC } from 'react';
import { SearchProps } from './TypeSearch';

import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

export const Search: FC<SearchProps> = ({ setIsClicked }) => {
	const handleInputClick = () => {
		setIsClicked(true);
	};

	return (
		<div className={styles.wrapper}>
			<input onClick={() => handleInputClick()} className={styles.search} type='search' placeholder='Search' />
			<SearchIcon className={styles.icon} />
		</div>
	);
};
