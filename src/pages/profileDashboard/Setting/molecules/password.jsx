import * as React from "react";
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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

const defaultTheme = createTheme();

function PasswordChange() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
    };
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid
          item
          xs={8}
          sm={4}
          md={2}
          square
          sx={{  border: "4px #314154 solid" }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                color: "white",
                backgroundColor: "#314154",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              sx={{ color: "#314154", fontSize: "30px", fontWeight: "bold" }}
              component="h1"
              variant="h5"
            >
              Set New Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <FormControl
                sx={{ m: 1, width: "100%", marginLeft: "1px" }}
                variant="outlined"
              >
                <InputLabel
                  sx={{ color: "#314154" }}
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment
                      sx={{
                        "& > :not(style)": { color: "#314154" },
                      }}
                      position="end"
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "100%", marginLeft: "1px" }}
                variant="outlined"
              >
                <InputLabel
                  sx={{ color: "#314154" }}
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment
                      sx={{
                        "& > :not(style)": { color: "#314154" },
                      }}
                      position="end"
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <BootstrapButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#314154",
                  fontWeight: "bold",
                }}
              >
                Reset password
              </BootstrapButton>
              <BootstrapButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "white",
                  color:"#314154",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </BootstrapButton>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    );
}

export default PasswordChange;
