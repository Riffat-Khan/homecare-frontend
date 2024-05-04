import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
        HEY!
      </Typography>
      <Typography sx={{ fontSize: 20 , paddingBottom:5 }} color="text.secondary" gutterBottom>
        Do you have any comment?
      </Typography>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={6}
          defaultValue="Type here!"
        />
    </CardContent>
    <CardActions sx={{justifyContent:"end"}}>
    <Button sx={{ bgcolor:"#314154"}} variant="contained">Submit</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
