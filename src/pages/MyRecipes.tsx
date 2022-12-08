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
        background: `url(${myRecipeImage}) no-repeat center center `,
      }}
    >
      <Container>
        <Typography
          sx={{
            fontFamily: "EB Garamond",
          }}
          variant="h3"
          color="secondary"
          align="center"
        >
          My recipe dashboard
          <p>Welcome, {user?.displayName}</p>
        </Typography>

        <RecipeControl />
      </Container>
    </Stack>
  );
};

export default MyRecipes;
