import { FC } from 'react';
import { Box } from '@mui/material';
import Header from "common/components/header/Header";
import BarChart from "common/components/bar-chart/BarChart";

const Bar: FC = () => {
  return (
    <Box m='20px'>
      <Header title='BAR CHART' subtitle='Simple Bar Chart'/>
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
