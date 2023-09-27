import { FC } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonBlock: FC = () => {
	const variantsSkeleton = {
		initial: { clipPath: 'inset(50% 50% 50% 50%)' },
		animate: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1 } },
		exit: { clipPath: 'inset(50% 50% 50% 50%)' },
	};

	return (
		<>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
			<motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variantsSkeleton}>
				<Skeleton variant='rounded' sx={{ height: 300, width: 300 }} animation='wave' />
				<div>
					<Skeleton variant='text' sx={{ width: 130 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
					<Skeleton variant='text' sx={{ width: 300 }} animation='wave' />
				</div>
			</motion.div>
		</>
	);
};
