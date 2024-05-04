import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BasicLineChart from "./graphs"
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
        <Typography sx={{fontSize:"20px" , color:"#314154" , fontStyle:"italic"}} >Body Temperature <BasicLineChart /></Typography>        </Grid>
        <Grid xs={6}>
        <Typography sx={{fontSize:"20px" , color:"#314154" , fontStyle:"italic"}} >Heart Beat(bps)<BasicLineChart /></Typography>
        </Grid>
        <Grid xs={6}>
        <Typography sx={{fontSize:"20px" , color:"#314154" , fontStyle:"italic"}} >Room Humidity <BasicLineChart /></Typography>
        </Grid>
        <Grid xs={6}>
        <Typography sx={{fontSize:"20px" , color:"#314154" , fontStyle:"italic"}} >Room Temperature <BasicLineChart /></Typography>
        </Grid>
      </Grid>
    </Box>
  );
}