import { FC } from 'react';
import Header from '../../common/components/header/Header';
import { Box } from '@mui/material';

const Dashboard: FC = () => {
	return (
		<Box m='20px'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
			</Box>
		</Box>
	);
};

export default Dashboard;
