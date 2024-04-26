import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 5, label: 'A' , colors : '#a76282'},
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
];

const size = {
  width: 350,
  height: 300,
};

export default function PieArcLabel() {
  return (
    <PieChart
    
     colors={['#a76282', 'blue', 'green']}
     layout="horizontal"
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
        marginTop:"-55px",
      }}
      {...size}
    />
  );
}