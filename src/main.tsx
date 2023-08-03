import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NikePage } from './pages/NikePage';
import { ErrorPage } from './pages/ErrorPage';
import { YeezyPage } from './pages/YeezyPage';
import { StoresPage } from './pages/StoresPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { DetailsPage } from './pages/DetailsPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { OffWhitePage } from './pages/OffWhitePage';
import { AirJordanPage } from './pages/AirJordanPage';
import { TopSellersPage } from './pages/TopSellersPage';
import { NewBalancePage } from './pages/NewBalancePage';
import { LowestPricePage } from './pages/LowestPricePage';
import { AllSneakersPage } from './pages/AllSneakersPage';
import { SearchResultPage } from './pages/SearchResultPage';
import { ShippingAndReturnsPage } from './pages/ShippingAndReturnsPage';

import styles from './main.module.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/store-location',
		element: <StoresPage />,
	},
	{
		path: '/about-us',
		element: <AboutUsPage />,
	},
	{
		path: '/details/:id',
		element: <DetailsPage />,
	},
	{
		path: '/shipAndReturn',
		element: <ShippingAndReturnsPage />,
	},
	{
		path: '/sneakers',
		element: <AllSneakersPage />,
	},
	{
		path: '/my-account',
		element: <MyAccountPage />,
	},
	{
		path: '/top-sellers',
		element: <TopSellersPage />,
	},
	{
		path: '/off-white',
		element: <OffWhitePage />,
	},
	{
		path: '/air-jordan',
		element: <AirJordanPage />,
	},
	{
		path: '/nike',
		element: <NikePage />,
	},
	{
		path: '/yeezy',
		element: <YeezyPage />,
	},
	{
		path: '/new-balance',
		element: <NewBalancePage />,
	},
	{
		path: '/lowest-price',
		element: <LowestPricePage />,
	},
	{
		path: '/search-result',
		element: <SearchResultPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<div className={styles.wrapper}>
				<RouterProvider router={router} />
			</div>
		</Provider>
	</React.StrictMode>
);

// создать компонент SEARCH RESULTS
// написать условие TitleBrand
// написать условия фильтра массива allSneakers
