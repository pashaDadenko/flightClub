import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import styles from './Carousel.module.scss';

export const Carousel: FC = () => {
	const imageCarousel = useSelector((state: RootState) => state.sneakersSlice.ImageCarousel);
	const [currentImage, setCurrentImage] = useState<number>(0);

	const handleBefore = () => setCurrentImage((prevImage) => (prevImage === 0 ? imageCarousel.length - 1 : prevImage - 1));
	const handleNext = () => setCurrentImage((prevImage) => (prevImage === imageCarousel.length - 1 ? 0 : prevImage + 1));

	return (
		<div className={styles.wrapper}>
			<div className={styles.carousel}>
				<NavigateBeforeIcon className={styles.arrow} onClick={handleBefore} />
				<img className={styles.image} src={imageCarousel[currentImage]} alt={`Slide ${currentImage}`} />
				<NavigateNextIcon className={styles.arrow} onClick={handleNext} />
			</div>
		</div>
	);
};

// на mobile сделать swiper
