import React from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeDetailProps {
  onClickingEdit: (recipe: IRecipe) => void;
  onClickingDelete: (recipe: IRecipe) => void;
  recipe: IRecipe;
  name: string;
  ingredients: string;
  directions: string;
  prepTime: number;
  cookingTime: number;
  comments: string;
  id: IRecipe;
}

function RecipeDetail(props: IRecipeDetailProps) {
  // const { ticket, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Recipe</h1>
      <h3>{props.name}</h3>
      <h3>{props.ingredients}</h3>
      <h3>{props.directions}</h3>
      <h3>{props.prepTime}</h3>
      <h3>{props.cookingTime}</h3>
      <h3>{props.comments}</h3>
      <button onClick={onClickingEdit}>Update recipe</button>
      <button onClick={() => onClickingDelete(recipe.id)}>Delete recipe</button>
      <hr />
    </React.Fragment>
  );
}

// TicketDetail.propTypes = {
//   ticket: PropTypes.object,
//   onClickingDelete: PropTypes.func,
//   onClickingEdit: PropTypes.func
// };

export default RecipeDetail;
