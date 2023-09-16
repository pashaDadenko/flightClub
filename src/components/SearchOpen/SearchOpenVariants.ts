export const variantSearch = {
	initial: { y: -700, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3, type: 'keyframes' } },
	exit: { y: -700, opacity: 0 },
};

export const variantOverlay = {
	initial: { y: 700, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3, type: 'keyframes', delay: 0.2 } },
	exit: { y: 700, opacity: 0 },
};
