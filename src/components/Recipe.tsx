import React from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeProps {
  whenRecipeClicked: (recipe: IRecipe) => void;
  name: string;
  ingredients: string;
  directions: string;
  prepTime: number;
  cookingTime: number;
  comments: string;
  id: IRecipe;
}

function Recipe(props: IRecipeProps) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenRecipeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.ingredients}</h3>
        <h3>{props.directions}</h3>
        <h3>{props.prepTime}</h3>
        <h3>{props.cookingTime}</h3>
        <h3>{props.comments}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string,
//   id: PropTypes.string,
//   whenTicketClicked: PropTypes.func
// }

export default Recipe;
