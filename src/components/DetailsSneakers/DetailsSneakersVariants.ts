export const variantOverlay = {
	initial: { y: -1000, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3, delay: 0.2 } },
	exit: { y: -1000, opacity: 0, transition: { ease: 'linear', duration: 0.3 } },
};

export const variantSizes = {
	initial: { y: 1000, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3 } },
	exit: { y: 1000, opacity: 0, transition: { ease: 'linear', duration: 0.3 } },
};
