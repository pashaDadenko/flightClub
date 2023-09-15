export const variantSearch = {
	initial: { y: -700, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3, type: 'keyframes' } },
};

export const variantOverlay = {
	initial: { y: 700, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear', duration: 0.3, type: 'keyframes', delay: 0.2 } },
};
