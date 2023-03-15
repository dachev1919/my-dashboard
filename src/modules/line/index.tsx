import { FC } from 'react';
import { Box } from '@mui/material';
import Header from 'common/components/header/Header';
import LineChart from "common/components/line-chart/LineChart";

const Line: FC = () => {
	return (
		<Box m='20px'>
			<Header title='LINE CHART' subtitle='Simple Line Chart' />
			<Box height='75vh'>
				<LineChart />
			</Box>
		</Box>
	);
};

export default Line;
