import qs from 'qs';
import { api } from '../api/api';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { DetailsSneakers } from '../components/DetailsSneakers/DetailsSneakers';
import { RecommendedBlock } from '../components/RecommendedBlock/RecommendedBlock';

export const DetailsPage: FC = () => {
	api();
	window.scrollTo(0, 0);
	const navigate = useNavigate();
	const title = useSelector((state: RootState) => state.sneakersSlice.title);

	useEffect(() => {
		const queryString = qs.stringify({
			title: title.toLowerCase(),
		});
		navigate(`?${queryString}`);
	}, [title]);

	return (
		<>
			<Header />
			<DetailsSneakers />
			<RecommendedBlock />
			<Footer />
		</>
	);
};
