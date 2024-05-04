import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logoTrans from "../../assets/images/logo_trans.png";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ResponsiveAppBar from "../../modals/MenuBar/MenuBar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #314154",
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 240;
const IconArray = [<SettingsIcon />, <LogoutIcon />];

export default function PermanentDrawerLeft({  SideBarContent, heading, screen , TopiconArray }) {
  const [isSignoutModalOpen, setSignoutModalOpen] = React.useState(false);

  const handleSignoutClick = () => {
    setSignoutModalOpen(true);
  };

  const handleSignoutConfirm = () => {
    setSignoutModalOpen(false);
  };

  const handleSignoutCancel = () => {
    setSignoutModalOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#314154",
          height: "70px",
        }}
      >
        <ResponsiveAppBar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#314154",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img className="" src={logoTrans} alt="logo" />
        <Toolbar />
        <List sx={{ marginTop: "-50px", color: "white" }}>
          {SideBarContent.map(({ text, link }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={link}>
                <ListItemIcon sx={{ color: "white" }} key={index}>
                  {TopiconArray[index % TopiconArray.length]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "white" }} />
        <React.Fragment>
          <List sx={{ color: "white" }}>
            {["Setting", "Signout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                {text === "Setting" ? (
                  <ListItemButton component={Link} to="/profile-setting">
                    <ListItemIcon sx={{ color: "white" }} key={index}>
                      {IconArray[index % IconArray.length]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={handleSignoutClick}>
                    <ListItemIcon sx={{ color: "white" }} key={index}>
                      {IconArray[index % IconArray.length]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>

          <Modal
            open={isSignoutModalOpen}
            onClose={() => setSignoutModalOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={{ ...style, width: 500 }}>
              <Typography id="modal-title" variant="h6" component="h2">
                Sign Out
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                Are you sure you want to sign out?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  onClick={handleSignoutConfirm}
                  sx={{ backgroundColor: "#d3d3d3" }}
                  color="primary"
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  onClick={handleSignoutCancel}
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 2, backgroundColor: "#314154" }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>
        </React.Fragment>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          paddingLeft: "150px",
        }}
      >
        <Toolbar />
        <Typography
          sx={{
            color: "#314154",
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {heading}
        </Typography>
        {screen}
      </Box>
    </Box>
  );
}
