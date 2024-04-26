import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  fontWeight: "bold",
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  backgroundColor: "#314154",
  color: "white",
  borderColor: "white",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "white",
    borderColor: "#314154",
    color: "#314154",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#314154",
    color: "#d3d3d3",
    borderColor: "#d3d3d3",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const StyledButton = ({ ButtonContent }) => {
  return (
    <BootstrapButton variant="contained" disableRipple>
      {ButtonContent}
    </BootstrapButton>
  );
};

export default StyledButton;
