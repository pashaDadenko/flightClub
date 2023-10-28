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

export enum PATHS {
	HOME = '/',
	STORE_LOCATION = '/store-location',
	ABOUT_US = '/about-us',
	DETAILS = '/details/:id',
	SHIPPING_AND_RETURNS = '/shipAndReturn',
	SNEAKERS = '/sneakers',
	MY_ACCOUNT = '/my-account',
	TOP_SELLERS = '/top-sellers',
	OFF_WHITE = '/off-white',
	AIR_JORDAN = '/air-jordan',
	NIKE = '/nike',
	YEEZY = '/yeezy',
	NEW_BALANCE = '/new-balance',
	LOWEST_PRICE = '/lowest-price',
	SEARCH_RESULT = '/search-result',
	MY_CART = '/my-cart',
	LOGIN = '/login',
	CREATE_ACCOUNT = '/create-account',
	CHECKOUT = '/checkout',
	HELP = '/help',
	FORGOT_PASSWORD = '/forgot-password',
	NIKE_DUNK = '/nike-dunk',
	DARK_SHOES = '/dark-shoes',
	RAR_SHOES = '/rar-shoes',
	SELL_SNEAKERS = '/sell-sneakers',
	MY_ORDERS = '/my-orders',
}

export const routesConfig: IRouteConfig[] = [
	{
		path: PATHS.HOME,
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: PATHS.STORE_LOCATION,
		element: <StoresPage />,
	},
	{
		path: PATHS.ABOUT_US,
		element: <AboutUsPage />,
	},
	{
		path: PATHS.DETAILS,
		element: <DetailsPage />,
	},
	{
		path: PATHS.SHIPPING_AND_RETURNS,
		element: <ShippingAndReturnsPage />,
	},
	{
		path: PATHS.SNEAKERS,
		element: <AllSneakersPage />,
	},
	{
		path: PATHS.MY_ACCOUNT,
		element: <MyAccountPage />,
	},
	{
		path: PATHS.TOP_SELLERS,
		element: <TopSellersPage />,
	},
	{
		path: PATHS.OFF_WHITE,
		element: <OffWhitePage />,
	},
	{
		path: PATHS.AIR_JORDAN,
		element: <AirJordanPage />,
	},
	{
		path: PATHS.NIKE,
		element: <NikePage />,
	},
	{
		path: PATHS.YEEZY,
		element: <YeezyPage />,
	},
	{
		path: PATHS.NEW_BALANCE,
		element: <NewBalancePage />,
	},
	{
		path: PATHS.LOWEST_PRICE,
		element: <LowestPricePage />,
	},
	{
		path: PATHS.SEARCH_RESULT,
		element: <SearchResultPage />,
	},
	{
		path: PATHS.MY_CART,
		element: <MyCartPage />,
	},
	{
		path: PATHS.LOGIN,
		element: <LoginPage />,
	},
	{
		path: PATHS.CREATE_ACCOUNT,
		element: <CreateAccountPage />,
	},
	{
		path: PATHS.CHECKOUT,
		element: <CheckoutPage />,
	},
	{
		path: PATHS.HELP,
		element: <HelpPage />,
	},
	{
		path: PATHS.FORGOT_PASSWORD,
		element: <ForgotPasswordPage />,
	},
	{
		path: PATHS.NIKE_DUNK,
		element: <NikeDunkPage />,
	},
	{
		path: PATHS.DARK_SHOES,
		element: <DarkShoesPage />,
	},
	{
		path: PATHS.RAR_SHOES,
		element: <RarShoesPage />,
	},
	{
		path: PATHS.SELL_SNEAKERS,
		element: <SellSneakersPage />,
	},
	{
		path: PATHS.MY_ORDERS,
		element: <MyOrdersPage />,
	},
];
