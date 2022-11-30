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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/MyRecipes">My recipes</Link>
          </Typography>
          {user?.displayName ? (
            <Button onClick={handleSignOut} color="inherit">
              Logout
            </Button>
          ) : (
            <Link to="/signIn">Sign in</Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// export default Navbar;
