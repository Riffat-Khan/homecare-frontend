import * as React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#d3d3d3',
    border: '2px #314154 solid',
    boxShadow: 'none',
    color:"#314154"
  },
});


const DialogModal = ({ sign, route }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapButton
        sx={{ backgroundColor: "#314154", color: "white" , marginLeft:"150px" , marginY:"5px" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {sign}
      </BootstrapButton>
      <BootstrapDialog onClose={handleClose} open={open}>
        {route}
      </BootstrapDialog>
    </React.Fragment>
  );
};

// Add prop types validation
DialogModal.propTypes = {
  sign: PropTypes.string.isRequired,
  route: PropTypes.node.isRequired, // Adjust the type based on what `route` should be
};

export default DialogModal;
