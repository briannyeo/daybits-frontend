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
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { loginAtom } from "../App";
import urlcat from "urlcat";
import userlogo from "../images/account.png";
import writejournal from "../images/writejournal.png";
import community from "../images/community.png";
import planner from "../images/planner.png";
import daybitslogo from "../images/daybitslogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";

const BACKEND = process.env.REACT_APP_BACKEND;
const logoutUrl = urlcat(BACKEND, "/daybits/register/logout");

const pages = ["home", "journal", "community", "planner"];
const pages1 = ["home"];
const settings = ["Profile", "Account"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [login, setLogin] = useAtom(loginAtom);

  //console.log(login);

  //To handle logout button
  const handleLogout = (event) => {
    event.preventDefault();
    fetch(logoutUrl, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("You have successfully logged out!");
          //window.location.reload();
          setLogin(false);
          navigate("/daybits/home");
          //code to delete the cookie here
        } else {
          alert("Logout failed, please try again");
        }
      })
      .catch((error) => console.log(error));
  };

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

  return (
    <>
      {login ? (
        <AppBar style={{ backgroundColor: "#5CBEC6" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link to={`/daybits/home`}>
                  <img src={daybitslogo} style={{ maxWidth: "5rem" }} />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/daybits/${page}`}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                DAYBITS
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to={`/daybits/journal`}>
                  <Button
                    className="navBarButtons"
                    style={{ textDecoration: "none", marginRight: "2em" }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <div className="navBar">Journal</div>
                  </Button>
                </Link>
                <Link to={`/daybits/community`}>
                  <Button
                    className="navBar"
                    style={{ textDecoration: "none", marginRight: "2em" }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <div className="navBar">Community</div>
                  </Button>
                </Link>
                <Link to={`/daybits/planner`}>
                  <Button
                    className="navBarButtons"
                    style={{ textDecoration: "none", marginRight: "2em" }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <div className="navBar">Planner</div>
                  </Button>
                </Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon style={{ fontSize: "3rem" }} />
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
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <p onClick={() => navigate("/daybits/profile")}>
                        Profile
                      </p>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <p onClick={() => navigate("/daybits/account")}>
                        Account
                      </p>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <p onClick={handleLogout}>Logout</p>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <></>
        // <AppBar style={{ backgroundColor: "#5CBEC6" }} position="static">
        //   <Container maxWidth="xl">
        //     <Toolbar disableGutters>
        //       <Typography
        //         variant="h6"
        //         noWrap
        //         component="div"
        //         sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        //       >
        //         <Link to={`/daybits/home`}>
        //           <img src={daybitslogo} style={{ maxWidth: "7rem" }} />
        //         </Link>
        //       </Typography>

        //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        //         <IconButton
        //           size="large"
        //           aria-label="account of current user"
        //           aria-controls="menu-appbar"
        //           aria-haspopup="true"
        //           onClick={handleOpenNavMenu}
        //           color="inherit"
        //         >
        //           <MenuIcon />
        //         </IconButton>
        //         <Menu
        //           id="menu-appbar"
        //           anchorEl={anchorElNav}
        //           anchorOrigin={{
        //             vertical: "bottom",
        //             horizontal: "left",
        //           }}
        //           keepMounted
        //           transformOrigin={{
        //             vertical: "top",
        //             horizontal: "left",
        //           }}
        //           open={Boolean(anchorElNav)}
        //           onClose={handleCloseNavMenu}
        //           sx={{
        //             display: { xs: "block", md: "none" },
        //           }}
        //         >
        //           {pages1.map((page) => (
        //             <MenuItem key={page} onClick={handleCloseNavMenu}>
        //               <Typography textAlign="center">
        //                 <Link
        //                   style={{ textDecoration: "none" }}
        //                   to={`/daybits/${page}`}
        //                 >
        //                   {page}
        //                 </Link>
        //               </Typography>
        //             </MenuItem>
        //           ))}
        //         </Menu>
        //       </Box>
        //       <Typography
        //         variant="h6"
        //         noWrap
        //         component="div"
        //         sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        //       >
        //         DAYBITS
        //       </Typography>
        //       <Box
        //         sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        //       ></Box>
        //     </Toolbar>
        //   </Container>
        // </AppBar>
      )}
    </>
  );
};
export default Navbar;
