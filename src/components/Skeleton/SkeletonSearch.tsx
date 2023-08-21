import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonSearch: FC = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 30 }}>
			<div style={{ width: '50%' }}>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
			</div>
			<div style={{ width: '50%' }}>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
				<div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
					<Skeleton variant='rectangular' sx={{ height: 90, width: 90 }} animation='wave' />
					<div>
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
						<Skeleton variant='rounded' sx={{ height: 10, width: 300 }} animation='wave' />
					</div>
				</div>
			</div>
		</div>
	);
};
