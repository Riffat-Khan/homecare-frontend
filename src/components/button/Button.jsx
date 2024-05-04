import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)(({ bgColor, textColor }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  fontWeight: "bold",
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  backgroundColor: bgColor || "#314154", // Default background color if not provided
  color: textColor || "white", // Default text color if not provided
  borderColor: textColor || "white", // Border color same as text color by default
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
    backgroundColor: textColor || "white", // Default to text color on hover if not provided
    borderColor: bgColor || "#314154", // Default to background color on hover if not provided
    color: bgColor || "#314154", // Default to background color on hover if not provided
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: bgColor || "#314154", // Default background color if not provided
    color: "#d3d3d3",
    borderColor: "#d3d3d3",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));

const StyledButton = ({ ButtonContent, bgColor, textColor }) => {
  return (
    <BootstrapButton variant="contained" disableRipple bgColor={bgColor} textColor={textColor}>
      {ButtonContent}
    </BootstrapButton>
  );
};

export default StyledButton;
