import { FC } from 'react';
import { api } from '../api/api';
import { HeaderCheckout } from '../components/HeaderCheckout/HeaderCheckout';

export const HelpPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	const style = {
		height: '500px',
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '50px',
	};

	return (
		<>
			<HeaderCheckout />
			<div style={style}>сам себе помоги (◕‿◕)</div>
		</>
	);
};
