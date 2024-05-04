import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

function RenderItems() {
  const messages = [
    { id: 1, message: 'Message 1' },
    { id: 2, message: 'Message 2' },
    { id: 3, message: 'Message 3' },
    { id: 4, message: 'Message 4' },
    { id: 5, message: 'Message 5' },
    { id: 6, message: 'Message 6' },
  ];

  return (
    <React.Fragment>
      <Typography sx={{color:"white" , fontSize:"25px" , paddingBottom:"5px"}}>
        LATEST ISSUES
      </Typography>
      {messages.map((item) => (
        <Item key={item.id} 
          sx={{
            my: 1, mx: 'auto', p: 2,
          }} >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar sx={{ backgroundColor: "#314154" }}>R</Avatar>
            <Typography noWrap>{item.message}</Typography>
          </Stack>
        </Item>
      ))}
    </React.Fragment>
  );
}

export default RenderItems;
