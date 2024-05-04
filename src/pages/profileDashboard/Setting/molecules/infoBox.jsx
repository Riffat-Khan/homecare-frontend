import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ProfileForm() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          Basic Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              First Name
            </Typography>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Last Name
            </Typography>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Cnic
            </Typography>
            <TextField fullWidth label="Cnic" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Phone Number
            </Typography>
            <TextField fullWidth label="Phone Number" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Address
            </Typography>
            <TextField fullWidth label="Address" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Date of Birth
            </Typography>
            <TextField fullWidth type="date"></TextField>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container justifyContent="left" gap={10}>
          <Button
            sx={{ backgroundColor: "#314154", fontSize: 20 }}
            variant="contained"
          >
            Save
          </Button>
          <Button
            sx={{ backgroundColor: "#314154", fontSize: 20 }}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
