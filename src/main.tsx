import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { ErrorPage } from './pages/Error/ErrorPage';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Stores } from './components/Stores/Stores';

import styles from './main.module.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'storelocator',
        element: <Stores />,
    },
    {
        path: 'about-us',
        element: <AboutUs />,
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
