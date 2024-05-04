import React from "react";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#d3d3d3',
      border: '2px #314154 solid',
      boxShadow: 'none',
      color:"#314154"
    },
  });

function Create() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        backgroundColor: "#d3d3d3",
        borderWidth: "3px",
        borderStyle: "solid",
      }}
    >
        <Typography sx={{fontSize:"20px" , marginBottom:"10px" , fontWeight:"bold"}}>CREATE NEW ISSUE</Typography>
      <Typography>Title</Typography>
      <TextField
        sx={{
          "& > :not(style)": { color: "#314154" },
        }}
        margin="normal"
        fullWidth
        label="Title"
        name="title"
        autoFocus
      />
      <Typography>Description</Typography>
      <TextField
        sx={{
          "& > :not(style)": { color: "#314154" },
        }}
        margin="normal"
        fullWidth
        label="Description"
        name="text"
        autoFocus
      />
      <BootstrapButton sx={{ backgroundColor: "#314154", color: "white" , marginLeft:"150px" , marginY:"5px" }}
        variant="outlined">Submit</BootstrapButton>
    </div>
  );
}

export default Create;
