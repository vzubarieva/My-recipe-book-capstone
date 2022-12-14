import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import RecipeControl from "../components/RecipeControl";
import { UserAuth } from "../context/AuthContext";
import myRecipeImage from "./../img/strawberries.jpg";

const MyRecipes = () => {
  const { user } = UserAuth();

  return (
    <Stack
      sx={{
        background: `url(${myRecipeImage}) no-repeat center center fixed `,
        backgroundSize: "cover",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            fontFamily: "EB Garamond",
          }}
          variant="h3"
          color="secondary"
          align="center"
        >
          <p>Welcome, {user?.displayName}</p>
        </Typography>

        <RecipeControl />
      </Container>
    </Stack>
  );
};

export default MyRecipes;
