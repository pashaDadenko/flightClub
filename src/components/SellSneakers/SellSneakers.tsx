import { FC } from 'react';

import styles from './SellSneakers.module.scss';

export const SellSneakers: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>SELL WITH FLIGHT CLUB</h2>
				<div className={styles.wrap}>
					<div>
						<p className={styles.text}>
							Selling with Flight Club is the easiest way to move your new and lightly worn sneakers. With our network of retail stores in New York, Los Angeles and Miami, in addition to
							a premier online experience, Flight Club offers the best liquidity and sell-through in the game, at the most competitive prices available anywhere.
						</p>
						<p className={styles.text}>The selling process is as follows:</p>
						<p className={styles.subText}>1. Bring to one of our stores your shoes that you want to sell.</p>
						<p className={styles.subText}>
							2. Once received, we process and verify your sneakers' authenticity. We then list them across our network of selling channels — including our retail stores, flightclub.com
							goat.com and the GOAT app.
						</p>
						<p className={styles.subText}>3. When your shoes are sold, you can request a digital payout to your bank account.</p>
					</div>
					<img className={styles.image} src={'https://www.flightclub.com/static/staticPages/consign.png'} alt='imageStore' />
				</div>
			</div>
		</div>
	);
};
