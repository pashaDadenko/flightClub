import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './HeaderCheckout.module.scss';

export const HeaderCheckout: FC = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Link className={styles.logo} to={'/'}>
					FLIGHT CLUB
				</Link>

				{pathname !== '/help' && (
					<Link className={styles.link} to={'/help'}>
						<p className={styles.help}>Need Help?</p>
					</Link>
				)}
			</div>
		</div>
	);
};
