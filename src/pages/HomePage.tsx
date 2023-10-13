import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { InfoBlock } from '../components/InfoBlock/InfoBlock';
import { OffWhiteBlock } from '../components/OffWhiteBlock/OffWhiteBlock';
import { AirJordanBlock } from '../components/AirJordanBlock/AirJordanBlock';
import { TopSellersBlock } from '../components/TopSellersBlock/TopSellersBlock';

export const HomePage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<AirJordanBlock />
			<OffWhiteBlock />
			<TopSellersBlock />
			<InfoBlock />
			<Footer />
		</>
	);
};
