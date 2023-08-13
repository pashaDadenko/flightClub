import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TypeStores } from './TypeStores';
import mapImage from '../../images/map.png';

import styles from './Stores.module.scss';

export const Stores: FC = () => {
	const stores: TypeStores[] = [
		{
			title: 'Flight Club New York',
			address: '812 Broadway New York, NY 10003',
			storeHours: 'Monday - Sunday 11AM - 7PM ET',
			consignment: 'Monday - Sunday 11AM - 5PM ET',
			link: 'https://www.google.com/maps/place/812+Broadway,+New+York,+NY+10003/@40.7326266,-73.9931179,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259996b5c4775:0x6f6c00aa458a61a8!8m2!3d40.7326226!4d-73.9909292?shorturl=1',
		},
		{
			title: 'Flight Club Miami',
			address: '535 N Fairfax Ave Los Angeles, CA 90036',
			storeHours: 'Monday - Sunday 11AM - 7PM PT',
			consignment: 'Monday - Sunday 11AM - 5PM PT',
			link: 'https://www.google.com/maps/place/535+N+Fairfax+Ave,+Los+Angeles,+CA+90036/@34.0810545,-118.363882,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2beccef28d549:0x14edf3008bf42a3b!8m2!3d34.0810501!4d-118.3616933?shorturl=1',
		},
		{
			title: 'Flight Club Los Angeles',
			address: '3910 NE 1st Ave Miami, FL 33137',
			storeHours: 'Monday - Saturday 11AM - 7PM ET',
			consignment: 'Monday - Saturday 11AM - 6PM ET',
			link: 'https://www.google.com/maps/place/3910+NE+1st+Ave,+Miami,+FL+33137,+%D0%A1%D0%A8%D0%90/@25.8130489,-80.1936525,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b150d72583af:0x54a2cdd171cbea01!8m2!3d25.8130489!4d-80.1936525!16s%2Fg%2F11fhkrm6fq?entry=ttu',
		},
	];

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>STORES</h2>
			<ul className={styles.storeWrapper}>
				{stores.map((item, index) => (
					<li className={styles.store} key={index}>
						<Link to={item.link}>
							<img src={mapImage} alt='mapImage' />
						</Link>
						<div>
							<h4 className={styles.storeTitle}>{item.title}</h4>
							<Link className={styles.storeAddress} to={item.link}>
								{item.address}
							</Link>
							<h4 className={styles.storeSubTitle}>Store Hours</h4>
							<p className={styles.storeHours}>{item.storeHours}</p>
							<p className={styles.storeSubTitle}>Consignment</p>
							<p className={styles.consignment}>{item.consignment}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
