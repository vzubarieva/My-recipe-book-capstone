import React from "react";
import ReusableForm from "./ReusableForm";
import { IRecipe } from "../models/Recipe";

interface IEditRecipeFormProps {
  onEditRecipe: (recipe: IRecipe) => void;
  recipe: IRecipe;
}

function EditRecipeForm(props: IEditRecipeFormProps) {
  // const { recipe } = props;

  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe({
      name: event.target.name.value,
      ingredients: event.target.ingredients.value,
      directions: event.target.directions.value,
      prepTime: event.target.prepTime.value,
      cookingTime: event.target.cookingTime.value,
      comments: event.target.comments.value,
      id: recipe.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update recipe"
      />
    </React.Fragment>
  );
}

// EditTicketForm.propTypes = {
//   onEditTicket: PropTypes.func,
//   ticket: PropTypes.object
// };

export default EditRecipeForm;
