import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { ErrorPage } from './pages/Error/ErrorPage';
import { TopSellersPage } from './pages/TopSellers/TopSellersPage';
import { AboutUsPage } from './pages/AboutUs/AboutUsPage';
import { StoresPage } from './pages/Stores/StoresPage';

import styles from './main.module.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'top-sellers',
        element: <TopSellersPage />,
    },
    {
        path: 'store-location',
        element: <StoresPage />,
    },
    {
        path: 'about-us',
        element: <AboutUsPage />,
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
