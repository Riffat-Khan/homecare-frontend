import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
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
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const BootstrapButton = styled(Button)({
    '&:hover': {
      backgroundColor: 'white',
      border: '2px #314154 solid',
      boxShadow: 'none',
      color:"#314154"
    },
  });

const defaultTheme = createTheme();

const SignUp = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      age : data.get("age"),
      gender : data.get("gender")
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        square
        sx={{ px: "80px" , border: "4px #314154 solid" }}
      >
        <Box
          sx={{
            my: 8,
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
            sx={{ color: "#314154", fontSize: "40px", fontWeight: "bold" }}
            component="h1"
            variant="h5"
          >
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              sx={{
                "& > :not(style)": {color:"#314154"},
              }}
              margin="normal"
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              sx={{
                "& > :not(style)": { color: "#314154" },
              }}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControl
              sx={{ mt:2 , width: "100%", marginLeft: "1px" }}
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
            <TextField
              sx={{
                "& > :not(style)": { color: "#314154"},
              }}
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              autoFocus
            />
            <FormControl fullWidth>
              <InputLabel sx={{color:"#314154"}} id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
            <BootstrapButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#314154",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </BootstrapButton>
            <Grid container>
              <Grid item>
                <Link
                  sx={{ color: "#314154", textDecoration: "none" }}
                  variant="body2"
                >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
