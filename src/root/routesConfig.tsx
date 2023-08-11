import { ReactElement } from 'react';

import { HomePage } from '../pages/HomePage';
import { NikePage } from '../pages/NikePage';
import { HelpPage } from '../pages/HelpPage';
import { ErrorPage } from '../pages/ErrorPage';
import { YeezyPage } from '../pages/YeezyPage';
import { LoginPage } from '../pages/LoginPage';
import { MyCartPage } from '../pages/MyCartPage';
import { StoresPage } from '../pages/StoresPage';
import { AboutUsPage } from '../pages/AboutUsPage';
import { DetailsPage } from '../pages/DetailsPage';
import { OffWhitePage } from '../pages/OffWhitePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AirJordanPage } from '../pages/AirJordanPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TopSellersPage } from '../pages/TopSellersPage';
import { NewBalancePage } from '../pages/NewBalancePage';
import { LowestPricePage } from '../pages/LowestPricePage';
import { AllSneakersPage } from '../pages/AllSneakersPage';
import { SearchResultPage } from '../pages/SearchResultPage';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { ShippingAndReturnsPage } from '../pages/ShippingAndReturnsPage';

interface IRouteConfig {
	path: string;
	element: ReactElement;
	errorElement?: ReactElement;
}

export const routesConfig: IRouteConfig[] = [
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
	{
		path: '/my-cart',
		element: <MyCartPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/create-account',
		element: <CreateAccountPage />,
	},
	{
		path: '/checkout',
		element: <CheckoutPage />,
	},
	{
		path: '/help',
		element: <HelpPage />,
	},
];
