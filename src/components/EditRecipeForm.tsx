import React from "react";
import ReusableForm from "./ReusableForm";
import { IRecipe } from "../models/Recipe";

interface IEditRecipeFormProps {
  onEditRecipe: (recipe: IRecipe) => void;
  recipe: IRecipe;
}

function EditRecipeForm({ recipe, onEditRecipe }: IEditRecipeFormProps) {
  function handleEditRecipeFormSubmission(updatedRecipe: IRecipe) {
    onEditRecipe({
      ...updatedRecipe,
      id: recipe.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        onSubmit={handleEditRecipeFormSubmission}
        buttonText="Update recipe"
      />
    </React.Fragment>
  );
}

export default EditRecipeForm;
