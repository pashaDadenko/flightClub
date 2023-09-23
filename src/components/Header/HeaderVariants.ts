export const variantWrap = {
	initial: { y: -10, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { ease: 'linear' } },
	exit: { y: 10, opacity: 0, transition: { ease: 'linear', delay: 0.4 } },
};

export const variantAccount = {
	initial: { y: -50, opacity: 0, scale: 0, rotateX: 0 },
	animate: { y: 0, opacity: 1, scale: 1, rotateX: 360, transition: { ease: 'linear', duration: 0.25 } },
	exit: { y: -50, opacity: 0, scale: 0, rotateX: 0, transition: { ease: 'linear', duration: 0.25 } },
};

export const variantOrders = {
	initial: { y: -70, opacity: 0, scale: 0, rotateX: 0 },
	animate: { y: 0, opacity: 1, scale: 1, rotateX: 360, transition: { ease: 'linear', delay: 0.2, duration: 0.25 } },
	exit: { y: -70, opacity: 0, scale: 0, rotateX: 0, transition: { ease: 'linear', delay: 0.2, duration: 0.25 } },
};

export const variantCart = {
	initial: { y: -70, opacity: 0, scale: 0, rotateX: 0 },
	animate: { y: 0, opacity: 1, scale: 1, rotateX: 360, transition: { ease: 'linear', delay: 0.4, duration: 0.25 } },
	exit: { y: -70, opacity: 0, scale: 0, rotateX: 0, transition: { ease: 'linear', delay: 0.4, duration: 0.25 } },
};

export const variantOut = {
	initial: { y: -90, opacity: 0, scale: 0, rotateX: 0 },
	animate: { y: 0, opacity: 1, scale: 1, rotateX: 360, transition: { ease: 'linear', delay: 0.6, duration: 0.25 } },
	exit: { y: -90, opacity: 0, scale: 0, rotateX: 0, transition: { ease: 'linear', delay: 0.6, duration: 0.25 } },
};

export const variantUp = {
	initial: { y: -90, opacity: 0, scale: 0, rotateX: 0 },
	animate: { y: 0, opacity: 1, scale: 1, rotateX: 360, transition: { ease: 'linear', delay: 0.6, duration: 0.25 } },
	exit: { y: -90, opacity: 0, scale: 0, rotateX: 0, transition: { ease: 'linear', delay: 0.6, duration: 0.25 } },
};
