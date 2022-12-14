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
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "EB Garamond",
            display: "flex",
            justifyContent: "center",
            margin: "5% 50% 0 0",
            fontSize: "1 rem",
            textAlign: "left",
          }}
        >
          My recipe book can help to organize your recipes. Keep your recipes
          online, and access them from any web browser!
        </Typography>{" "}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "EB Garamond",
            display: "flex",
            justifyContent: "center",
            margin: "5% 50% 0 0",
            fontSize: "1 rem",
            textAlign: "left",
          }}
        >
          Recipes are easily searchable. No more flipping through cookbooks or
          recipe cards searching for that one recipe. Just log in and type in
          the name and find it instantly!
        </Typography>
      </Container>
    </Stack>
  );
};

export default About;
