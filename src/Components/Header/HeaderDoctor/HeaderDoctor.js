import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../Assets/logo.png";
import "./HeaderDoctor.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles"


import { useNavigate } from "react-router";
import { Logout } from "@mui/icons-material";

const pages = ["ฟอร์มบันทึกการรักษา", "ประวัติการรักษาคลินิก","ข้อมูลลูกค้า (OPD)"];
// const settings = ["โปรไฟล์", "ออกจากระบบ"];
const nav = [
  "/treatmentform",
  "/customer/showCustomers",
  "/doctor/showDoctor",
];

function HeaderDoctor() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navEmployee = () => { 
      navigate('/treatmentform')  
  }
  const navCustomer = () =>{
    navigate('/doctor/show-clinic-treatment')
  }
  const navDoctor = () =>{
    navigate('/doctor/showOPD')
  }
  const LogOut = () =>{
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <ThemeProvider theme={theme}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Kanit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#C3A55C",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" className="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#C3A55C"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "#C3A55C",
              }}
            >
              <MenuItem onClick={navEmployee} sx={{ color: "#C3A55C" }} >
                <Typography  textAlign="center" sx={{ color: "#C3A55C" ,fontFamily: "Kanit",}} >
                  {pages[0]}
                </Typography>
              </MenuItem>
              <MenuItem onClick={navCustomer}  sx={{ color: "#C3A55C" }}>
                <Typography textAlign="center" sx={{ color: "#C3A55C" }}>
                  {pages[1]}
                </Typography>
              </MenuItem>
              <MenuItem onClick={navDoctor} sx={{ color: "#C3A55C" }}>
                <Typography  textAlign="center" sx={{ color: "#C3A55C" }}>
                  {pages[2]}
                </Typography>
              </MenuItem>
              {/* <MenuItem 
              // onClick={navEmployee} 
              sx={{ color: "#C3A55C" }}>
                <Typography  textAlign="center" sx={{ color: "#C3A55C" }}>
                  {pages[3]}
                </Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#C3A55C",
              textDecoration: "none",
            }}
          >
            DONALA CLINIC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

              <Button
                
                onClick={navEmployee}
                sx={{ my: 2, color: "#C3A55C", display: "block" }}
              >
                {pages[0]}
              </Button>
              <Button
                
                onClick={navCustomer}
                sx={{ my: 2, color: "#C3A55C", display: "block" }}
              >
                {pages[1]}
              </Button>
              <Button
               
                onClick={navDoctor}
                sx={{ my: 2, color: "#C3A55C", display: "block" }}
              >
                {pages[2]}
              </Button>
              <Button
               
                // onClick={navEmployee}
                sx={{ my: 2, color: "#C3A55C", display: "block" }}
              >
                {pages[3]}
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ color: "#C3A55C" }}>
                    Natinan S.
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={LogOut} textAlign="center" sx={{ color: "#C3A55C" }}>
                    ออกจากระบบ
                  </Typography>
                </MenuItem>
              {/* // ))} */}
            </Menu>
          </Box>
          </ThemeProvider>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderDoctor;
