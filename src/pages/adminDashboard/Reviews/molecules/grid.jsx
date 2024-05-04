import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BoxContent from "./box"
import OutlinedCard from "./card"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1, marginTop:5 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item><BoxContent /></Item>
        </Box>
        <Box gridColumn="span 4">
          <Item sx={{backgroundColor:"#314154"}}><OutlinedCard /></Item>
        </Box>
      </Box>
    </Box>
  );
}
