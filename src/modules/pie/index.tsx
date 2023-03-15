import { FC } from 'react';
import {Box} from "@mui/material";
import Header from "common/components/header/Header";
import PieChart from "common/components/pie-chart/PieChart";

const Pie: FC = () => {
  return (
    <Box m='20px'>
      <Header title='PIE CHART' subtitle='Simple Pie Chart'/>
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
