import React from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeDetailProps {
  onClickingEdit: (id: string) => void;
  onClickingDelete: (id: string) => void;
  recipe: IRecipe;
}

function RecipeDetail(props: IRecipeDetailProps) {
  const { recipe, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Recipe</h1>
      <h3>{recipe.name}</h3>
      <h3>{recipe.ingredients}</h3>
      <h3>{recipe.directions}</h3>
      <h3>{recipe.prepTime}</h3>
      <h3>{recipe.cookingTime}</h3>
      <h3>{recipe.comments}</h3>
      <button onClick={() => onClickingEdit(recipe.id)}>Update recipe</button>
      <button onClick={() => onClickingDelete(recipe.id)}>Delete recipe</button>
      <hr />
    </React.Fragment>
  );
}

export default RecipeDetail;
