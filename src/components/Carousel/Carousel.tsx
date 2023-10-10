import { useSelector } from 'react-redux';
import { FC, useRef, useState } from 'react';
import { RootState } from '../../redux/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import styles from './Carousel.module.scss';
import 'swiper/css';

export const Carousel: FC = () => {
	const swiperRef = useRef<any>(null);
	const imageCarousel = useSelector((state: RootState) => state.sneakersSlice.ImageCarousel);

	const goNext = () => swiperRef.current.slideNext();
	const goPrev = () => swiperRef.current.slidePrev();

	const [isFirstSlide, setIsFirstSlide] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);

	const handleSlideChange = (swiper: any) => {
		setIsFirstSlide(swiper.isBeginning);
		setIsLastSlide(swiper.isEnd);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.carousel}>
				<NavigateBeforeIcon className={`${styles.arrow} ${isFirstSlide ? styles.opacity : ''}`} onClick={goPrev} />
				<Swiper
					slidesPerView={1}
					speed={1000}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						handleSlideChange(swiper);
					}}
					onSlideChange={(swiper) => handleSlideChange(swiper)}>
					{imageCarousel &&
						imageCarousel.map((image, index) => (
							<SwiperSlide key={index}>
								<img className={styles.image} src={image} alt='image' />
							</SwiperSlide>
						))}
				</Swiper>
				<NavigateNextIcon className={`${styles.arrow} ${isLastSlide ? styles.opacity : ''}`} onClick={goNext} />
			</div>
		</div>
	);
};
