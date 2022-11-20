import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import { IRecipe } from "../models/Recipe";

interface INewRecipeFormProps {
  onNewRecipeCreation: (recipe: IRecipe) => void;
}

function NewRecipeForm(props: INewRecipeFormProps) {
  function handleNewRecipeFormSubmission(event) {
    event.preventDefault();
    props.onNewRecipeCreation({
      name: event.target.name.value,
      ingredients: event.target.ingredients.value,
      directions: event.target.directions.value,
      prepTime: event.target.prepTime.value,
      cookingTime: event.target.cookingTime.value,
      comments: event.target.comments.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewRecipeFormSubmission}
        buttonText="Save"
      />
    </React.Fragment>
  );
}

export default NewRecipeForm;
