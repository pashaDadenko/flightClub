import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';

import styles from './TitleBrand.module.scss';

export const TitleBrand: FC = () => {
	const { pathname } = useLocation();
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>{pathname === PATHS.SNEAKERS && 'SHOP ALL SNEAKERS'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.TOP_SELLERS && 'TOP SELLERS'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.OFF_WHITE && 'OFF-WHITE'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.AIR_JORDAN && 'AIR JORDAN'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.NIKE && 'NIKE'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.YEEZY && 'YEEZY'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.NEW_BALANCE && 'NEW BALANCE'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.LOWEST_PRICE && 'LOWEST PRICE'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.SEARCH_RESULT && `SEARCH RESULTS FOR "${searchValue.toUpperCase()}"`}</h2>
				<h2 className={styles.title}>{pathname === PATHS.NIKE_DUNK && 'NiKE DUNK'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.DARK_SHOES && 'DARK SHOES'}</h2>
				<h2 className={styles.title}>{pathname === PATHS.RAR_SHOES && 'RAR SHOES'}</h2>
				<p className={styles.text}>
					{pathname === PATHS.SNEAKERS && `The vault goes deep at Flight Club. Shop for new releases from must-have names like Air Jordan, Nike, New Balance and Yeezy, along with the latest collaborations from brands like Vans, Reebok, Converse, ASICS, and more.`}
				</p>
				<p className={styles.text}>
					{pathname === PATHS.AIR_JORDAN &&
						`Michael Jordan entered the NBA with the Chicago Bulls, taking over the league with graceful athleticism and a driving will to win. Starting his rookie year, the Air Jordan 1 featured both the Wings and Swoosh logo, and Nike Air cushioning underfoot. Subsequent models like the Air Jordan 3, Air Jordan 4 and Air Jordan 11 featured new technology and bold design, keeping the lineage relevant to each new generation. Since 1985, Air Jordans have transcended basketball, moving sneakers to the forefront of culture with new releases and colorways such as the  AJ 1 Lows 'Black Cement,' 'Wolf Grey' 13s and AJKO Low 'Bred.'`}
				</p>
				<p className={styles.text}>
					{pathname === PATHS.NIKE &&
						`Founders Phil Knight and Bill Bowerman pivoted Blue Ribbon Sports into the Nike that we know today. Synonymous with sneakers and athletic apparel, the Swoosh helped cement a legacy of sport and style through innovation and design. Nike’s legacy lives on through classic sneakers such as the Nike Dunk, Air Force 1 and Nike Blazer, while continuing to push boundaries through the Air Max and Air Jordan lines.`}
				</p>
				<p className={styles.text}>
					{pathname === PATHS.YEEZY &&
						`Chicago-native Kanye West broke new ground in 2015 when he delved into the worlds of fashion and sneakers. Having worked with Nike, Louis Vuitton and A Bathing Ape, West linked with adidas to create the Yeezy line. Staples such as the Yeezy 350, Yeezy 500, and Yeezy 700 have become cult favorites, as West continues to push the boundaries of sneaker design.`}
				</p>
				<p className={styles.text}>
					{pathname === PATHS.NEW_BALANCE &&
						`New Balance has been making premium, hand-crafted footwear since 1906, and their legacy has been defined by a modest objective to maintain quality builds for comfort and arch support. With shoes made both in the US and UK – from classic running designs such as the 574 and 990 to basketball staples such as the 550 – NB boldly incorporates its running heritage into new silhouettes such as the 327. Recent celebrated releases feature high profile collaborations with brands like Aime Leon Dore, Joe Freshgoods, JJJJound and others.`}
				</p>
				<p className={styles.text}>
					{pathname === PATHS.OFF_WHITE &&
						`Virgil Abloh created Off-White as a fashion house with a streetwear mentality. Critiquing contemporary culture and always looking for his next inspiration, Abloh serves up a unique design language with Off-White, leaving his mark on classic Air Jordan, Converse, and Nike silhouettes through the brand's coveted sneaker collaborations.`}
				</p>
				<p className={styles.text}>{pathname === PATHS.LOWEST_PRICE && `Shop the latest price drops on Air Jordan, Yeezy and more, including Air Jordan 1s, Yeezy Boost 350s, Air Max, Vans Sk8-Hi and Air Force 1s.`}</p>
				<p className={styles.text}>
					{pathname === PATHS.NIKE_DUNK &&
						`Hitting the courts in 1985 as a team-based basketball shoe, the Nike Dunk has evolved into a lifestyle staple. First seen on a few college teams, the ‘Be True to Your School’ campaign saw the Dunk High and Dunk Low arrive in colorful shades representing each university. Brought back in retro form, the Nike Dunk has become a cultural icon through a series of coveted collaborations and colorways. Launched with the introduction of Nike SB in 2002, the Dunk was converted into a skate shoe with extra padding and Zoom Air cushioning. With its clean design and hoops heritage, the Dunk stays timeless with new releases such as the 'Cacao Wow' restock, CLOT 'What The' collab and 'Jade Ice.'`}
				</p>
			</div>
		</div>
	);
};
