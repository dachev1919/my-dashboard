import { FC } from 'react';
import {Box} from "@mui/material";
import Header from "common/components/header/Header";
import GeographyChart from "../../common/components/geography-chart/GeographyChart";

const Geography: FC = () => {
  return (
    <Box m='20px'>
      <Header title='PIE CHART' subtitle='Simple Pie Chart'/>
      <Box height='75vh'>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
