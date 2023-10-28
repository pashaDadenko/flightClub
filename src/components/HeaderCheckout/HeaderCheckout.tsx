import { FC } from 'react';
import { PATHS } from '../../root/routesConfig';
import { Link, useLocation } from 'react-router-dom';

import styles from './HeaderCheckout.module.scss';

export const HeaderCheckout: FC = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<Link className={styles.logo} to={PATHS.HOME}>
						FLIGHT CLUB
					</Link>
					{pathname !== PATHS.HELP && (
						<Link className={styles.link} to={PATHS.HELP}>
							Need Help?
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
