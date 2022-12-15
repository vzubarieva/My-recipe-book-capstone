import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";
import { alpha, Container, Stack, styled } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// const Navbar = () => {

//   return (
//     <div className="flex justify-between bg-gray-200 w-full p-4">
//       <h1 className="text-center text-2xl font-bold">My recipe book</h1>
//       {user?.displayName ? (
//         <button onClick={handleSignOut}>Logout</button>
//       ) : (
//         <Link to="/signIn">Sign in</Link>
//       )}
//     </div>
//   );
// };

export default function ButtonAppBar() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "12ch",
  //       "&:focus": {
  //         width: "20ch",
  //       },
  //     },
  //   },
  // }));

  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{
        backgroundColor: red["A400"],
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction={"row"} sx={{ flexGrow: 1 }} spacing={4}>
            <Typography variant="h6" component="div">
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/About">About</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/MyRecipes">My recipes</Link>
            </Typography>
          </Stack>
          {/* <Stack>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack> */}
          <Stack>
            {user?.displayName ? (
              <Button onClick={handleSignOut} color="inherit">
                Logout
              </Button>
            ) : (
              <Link to="/signIn">Sign in</Link>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// export default Navbar;
