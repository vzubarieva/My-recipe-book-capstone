import React from "react";
import ReusableForm from "./ReusableForm";
import { IRecipe } from "../models/Recipe";

interface INewRecipeFormProps {
  onNewRecipeCreation: (recipe: IRecipe) => void;
}

function NewRecipeForm(props: INewRecipeFormProps) {
  function handleNewRecipeFormSubmission(recipe: IRecipe) {
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
