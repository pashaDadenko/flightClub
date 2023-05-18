import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home/Home';

import styles from './main.module.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className={styles.wrapper}>
            <Home />
        </div>
    </React.StrictMode>
);
