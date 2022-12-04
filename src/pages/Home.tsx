import { CssBaseline, Stack, Typography } from "@mui/material";
import React from "react";
import mainImage from "./../img/brightpic.jpg";
import SignIn from "./SignIn";

function Home() {
  return (
    <Stack
      sx={{
        background: `url(${mainImage}) no-repeat center center fixed;`,
        backgroundSize: "cover",
        minHeight: "calc(100vh - 68px)",
      }}
    >
      <CssBaseline />
      <Typography
        sx={{
          fontFamily: "EB Garamond",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          textAlign: "center",
          fontSize: "6rem",
          margin: "0 0 0 30%",
        }}
      >
        My recipe book
      </Typography>
      <SignIn />
    </Stack>
  );
}

export default Home;
