import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";
import { Container, Stack } from "@mui/material";

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
