import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import BasicCard from "../../Overview/molecules/issueBox"
import ArcDesign from "./guageChart"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 21 }}
      >
        {Array.from(Array(5)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            {index === 0 && (
              <BasicCard heading={"Accepted"} content={<ArcDesign />} />
            )}
            {index === 1 && (
              <BasicCard heading={"In progress"} content={<ArcDesign />} />
            )}
            {index === 2 && (
              <BasicCard heading={"Completed"} content={<ArcDesign />} />
            )}
            {index === 3 && (
              <BasicCard heading={"Pending"} content={<ArcDesign />} />
            )}
            {index === 4 && (
              <BasicCard heading={"Rejected"} content={<ArcDesign />} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
