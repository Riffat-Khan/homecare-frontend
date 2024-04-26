import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import BasicCard from "./issueBox"
import ZeroWidthStack from "./historyBox"
import HorizontalBars from "./barChart"
import PieArcLabel from "./pieChart"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AutoGrid = () => {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <Grid container spacing={4}>
        <Grid sx={{marginTop:"-170px"}}>
          <Item sx={{borderColor: "#314154", color: "#314154", borderWidth: "3px", borderStyle: "solid"}}><HorizontalBars /></Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{borderColor: "#314154", color: "#314154", borderWidth: "3px", borderStyle: "solid"}}><PieArcLabel /></Item>
        </Grid>
        <Grid sx={{marginTop:"-240px", backgroundColor:"#314154"}} xs>
          <ZeroWidthStack />
        </Grid>
      </Grid>
    </Box>
  );
}


const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
      sx={{justifyContent: 'flex-end'}}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(3)).map((_, index) => (
          <Grid xs={3} sm={4} md={3} key={index}>
            {index === 2 && <BasicCard heading={"Recent Review"} content={"Lorem ipsum dolor, sit amet!"} />}
            {index === 1 && <BasicCard heading={"Vitals"} content={"Lorem ipsum dolor, sit amet!"} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export { AutoGrid, ResponsiveGrid };
