import { motion } from 'framer-motion';
import { CSSProperties, FC } from 'react';
import { HeaderCheckout } from '../components/HeaderCheckout/HeaderCheckout';

export const HelpPage: FC = () => {
	window.scrollTo(0, 0);

	const styleDiv: CSSProperties = {
		height: '100vh',
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '50px',
	};

	const variants1 = {
		initial: { x: -1000, opacity: 0 },
		animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut', type: 'tween', repeat: Infinity, repeatDelay: 0.3 } },
	};

	const items = ['(◕‿◕)', '(◕‿◕)', '(◕‿◕)'];
	const variants4 = {
		initial: { opacity: 0, y: 100 },
		animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.5, ease: 'linear', repeat: Infinity, repeatDelay: 2 } }),
	};

	return (
		<>
			<HeaderCheckout />
			<div style={styleDiv}>
				<div>
					hover
					{items.map((item, index) => (
						<motion.p key={index} initial={'initial'} animate={'animate'} variants={variants4} custom={index}>
							{item} 4
						</motion.p>
					))}
				</div>
				<motion.a style={{ marginTop: 100, marginBottom: 100, color: 'black', textDecoration: 'none' }} whileTap={{ scale: 2, color: 'red' }}>
					(◕‿◕) 3
				</motion.a>
				<motion.div
					style={{
						display: 'inline-block',
						marginBottom: 100,
					}}
					animate={{
						x: 360,
						rotateX: 360,
					}}
					transition={{
						delay: 1,
						duration: 2,
						repeat: Infinity,
						repeatDelay: 0.3,
						repeatType: 'reverse',
						type: 'keyframes',
						ease: 'linear',
					}}>
					(◕‿◕) 2
				</motion.div>
				<motion.p style={{ marginBottom: 100 }} initial={'initial'} animate={'animate'} variants={variants1}>
					(◕‿◕) 1
				</motion.p>
			</div>
		</>
	);
};
