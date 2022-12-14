import React from "react";
import ReusableForm from "./ReusableForm";
import { IRecipe, IRecipeForm } from "../models/Recipe";

interface INewRecipeFormProps {
  onNewRecipeCreation: (recipe: IRecipeForm) => void;
}

function NewRecipeForm(props: INewRecipeFormProps) {
  function handleNewRecipeFormSubmission(recipe: IRecipeForm) {
    props.onNewRecipeCreation({
      ...recipe,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        onSubmit={handleNewRecipeFormSubmission}
        buttonText="Save"
      />
    </React.Fragment>
  );
}

export default NewRecipeForm;
