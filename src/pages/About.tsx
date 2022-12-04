import React from "react";
import aboutImage from "./../img/passion-fruit.jpg";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const About = () => {
  return (
    <Stack
      sx={{
        background: `url(${aboutImage}) no-repeat center center fixed;`,
        backgroundSize: "cover",
        minHeight: "calc(100vh - 68px)",
      }}
    >
      {" "}
      <Typography
        sx={{
          fontFamily: "EB Garamond",
          display: "flex",
          justifyContent: "center",
          margin: "5% 50% 0 0",
          fontSize: "1.5rem",
        }}
      >
        <Container>
          <h1>
            My recipe book can help to organize your recipes. Keep your recipes
            online, and access them from any web browser!{" "}
          </h1>
          <h1>
            Recipes are easily searchable. No more flipping through cookbooks or
            recipe cards searching for that one recipe. Just log in and type in
            the name and find it instantly!
          </h1>
        </Container>
      </Typography>
    </Stack>
  );
};

export default About;
