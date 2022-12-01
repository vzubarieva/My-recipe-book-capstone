import { Stack, Typography } from "@mui/material";
import React from "react";
import mainImage from "./../img/brightpic.jpg";

function Home() {
  return (
    <Stack
      sx={{
        background: `url(${mainImage}) no-repeat center center fixed;`,
        backgroundSize: "cover",
        minHeight: "calc(100vh - 68px)",
      }}
    >
      <Typography>Home</Typography>
    </Stack>
  );
}

export default Home;
