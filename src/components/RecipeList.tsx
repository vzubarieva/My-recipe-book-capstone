import React from "react";
import Recipe from "./Recipe";
import { IRecipe } from "../models/Recipe";
// import RecipeCard from "./RecipeCard";

interface IRecipeListProps {
  onRecipeSelection: (id: string) => void;
  recipeList: Array<IRecipe>;
}

function RecipeList(props: IRecipeListProps) {
  return (
    <React.Fragment>
      <hr />
      {props.recipeList.map((recipe) => (
        <Recipe
          whenRecipeClicked={props.onRecipeSelection}
          recipe={recipe}
          key={recipe.id}
        />
      ))}
    </React.Fragment>
  );
}

export default RecipeList;
