import React from "react";
import Recipe from "./Recipe";
import { IRecipe } from "../models/Recipe";
import Grid from "@mui/material/Unstable_Grid2";

interface IRecipeListProps {
  onRecipeSelection: (id: string) => void;
  recipeList: Array<IRecipe>;
}

function RecipeList(props: IRecipeListProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.recipeList.map((recipe) => (
        <Grid xs={2} sm={4} md={4} key={recipe.id}>
          <Recipe
            whenRecipeClicked={props.onRecipeSelection}
            recipe={recipe}
            key={recipe.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
