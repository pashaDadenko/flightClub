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
import { RarShoesPage } from '../pages/RarShoesPage';
import { OffWhitePage } from '../pages/OffWhitePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { NikeDunkPage } from '../pages/NikeDunkPage';
import { MyOrdersPage } from '../pages/MyOrdersPage';
import { AirJordanPage } from '../pages/AirJordanPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DarkShoesPage } from '../pages/DarkShoesPage';
import { TopSellersPage } from '../pages/TopSellersPage';
import { NewBalancePage } from '../pages/NewBalancePage';
import { LowestPricePage } from '../pages/LowestPricePage';
import { AllSneakersPage } from '../pages/AllSneakersPage';
import { SellSneakersPage } from '../pages/SellSneakersPage';
import { SearchResultPage } from '../pages/SearchResultPage';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
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
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
	},
	{
		path: '/nike-dunk',
		element: <NikeDunkPage />,
	},
	{
		path: '/dark-shoes',
		element: <DarkShoesPage />,
	},
	{
		path: '/rar-shoes',
		element: <RarShoesPage />,
	},
	{
		path: '/sell-sneakers',
		element: <SellSneakersPage />,
	},
	{
		path: '/my-orders',
		element: <MyOrdersPage />,
	},
];
