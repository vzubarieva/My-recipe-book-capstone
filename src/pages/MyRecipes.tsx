import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import RecipeControl from "../components/RecipeControl";
import { UserAuth } from "../context/AuthContext";

const MyRecipes = () => {
  const { user } = UserAuth();

  return (
    <Typography>
      <Container>
        <div className="w-[300px] m-auto">
          <h1 className="text-center text-2xl font-bold pt-12">
            My recipe dashboard
          </h1>
          <div>
            <p>Welcome, {user?.displayName}</p>
          </div>

          <RecipeControl />
        </div>
      </Container>
    </Typography>
  );
};

export default MyRecipes;
