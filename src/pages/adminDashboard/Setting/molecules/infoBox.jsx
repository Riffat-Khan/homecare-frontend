import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProfileForm() {
  return (
    <Card>
      <CardContent>
      <Typography variant="h6" align="center" gutterBottom>
          Form Label
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 1" />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 2" />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 3" />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 4" />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 5" />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="subtitle1" align='left' gutterBottom>
              Input 1
            </Typography>
            <TextField fullWidth label="Input 6" />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container justifyContent="left" gap = {5}>
          <Button sx={{backgroundColor:"#314154"}} variant="contained">Save</Button>
          <Button sx={{backgroundColor:"#314154"}} variant="contained">Cancel</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
