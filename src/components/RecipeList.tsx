import React from "react";
import Recipe from "./Recipe";
import { IRecipe } from "../models/Recipe";

interface IRecipeListProps {
  onRecipeSelection: (recipe: IRecipe) => void;
  recipeList: Array<IRecipe>;
}

function RecipeList(props: IRecipeListProps) {
  return (
    <React.Fragment>
      <hr />
      {props.recipeList.map((recipe) => (
        <Recipe
          whenRecipeClicked={props.onRecipeSelection}
          name={recipe.name}
          ingredients={recipe.ingredients}
          directions={recipe.directions}
          prepTime={recipe.prepTime}
          cookingTime={recipe.cookingTime}
          comments={recipe.comments}
          id={recipe.id}
          key={recipe.id}
        />
      ))}
    </React.Fragment>
  );
}

// TicketList.propTypes = {
//   ticketList: PropTypes.array,
//   onTicketSelection: PropTypes.func
// };

export default RecipeList;
