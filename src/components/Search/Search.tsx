import { FC } from 'react';
import { SearchProps } from './TypeSearch';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

export const Search: FC<SearchProps> = ({ setSearchClick, scroll }) => {
	const { pathname } = useLocation();

	const inputColor = pathname === PATHS.HOME && scroll < document.documentElement.clientHeight ? { border: '1px solid #81818122', color: '#fff', fontSize: '16px' } : {};
	const iconColor = pathname === PATHS.HOME && scroll < document.documentElement.clientHeight ? { color: '#fff' } : {};

	return (
		<div className={styles.wrapper}>
			<input className={styles.search} style={inputColor} onClick={() => setSearchClick(true)} type='search' defaultValue='Search' />
			<SearchIcon className={styles.icon} style={iconColor} />
		</div>
	);
};
