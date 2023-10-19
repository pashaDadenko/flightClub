import { FC } from 'react';
import { Api } from '../api/Api';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { MoonLoader } from 'react-spinners';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { InfoBlock } from '../components/InfoBlock/InfoBlock';
import { OffWhiteBlock } from '../components/OffWhiteBlock/OffWhiteBlock';
import { AirJordanBlock } from '../components/AirJordanBlock/AirJordanBlock';
import { TopSellersBlock } from '../components/TopSellersBlock/TopSellersBlock';

export const HomePage: FC = () => {
	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);

	Api();
	window.scrollTo(0, 0);

	return (
		<>
			{allSneakers.length > 0 ? (
				<>
					<Header />
					<AirJordanBlock />
					<OffWhiteBlock />
					<TopSellersBlock />
					<InfoBlock />
					<Footer />
				</>
			) : (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', height: '100vh' }}>
					<MoonLoader color='#e91c29' size={150} speedMultiplier={1} />
				</div>
			)}
		</>
	);
};
