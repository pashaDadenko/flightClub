import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { StoresPage } from './pages/StoresPage';
import { DetailsPage } from './pages/DetailsPage';
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
