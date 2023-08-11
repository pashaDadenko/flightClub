import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styles from './root/main.module.scss';
import { routesConfig } from './root/routesConfig';
import './firebase';

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className={styles.wrapper}>
					<RouterProvider router={router} />
				</div>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
