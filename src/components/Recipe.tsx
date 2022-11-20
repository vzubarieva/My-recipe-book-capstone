import React from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeProps {
  whenRecipeClicked: (id: string) => void;
  recipe: IRecipe;
}

function Recipe({ recipe, whenRecipeClicked }: IRecipeProps) {
  return (
    <React.Fragment>
      <div onClick={() => whenRecipeClicked(recipe.id)}>
        <h3>{recipe.name}</h3>
        <h3>{recipe.ingredients}</h3>
        <h3>{recipe.directions}</h3>
        <h3>{recipe.prepTime}</h3>
        <h3>{recipe.cookingTime}</h3>
        <h3>{recipe.comments}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Recipe;
