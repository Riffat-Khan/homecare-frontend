import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InteractiveList from "./list"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1  , paddingY:10}}>
      <Grid sx={{justifyContent:"center"}} container columns={15}>
        <Grid  item xs={12}>
          <Item sx={{borderColor:"#314154" , borderWidth:3}}><InteractiveList /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
