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
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "EB Garamond",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "5rem",
          margin: "15% 0 0 30%",
        }}
      >
        My recipe book
      </Typography>
      <SignIn />
    </Stack>
  );
}

export default Home;
