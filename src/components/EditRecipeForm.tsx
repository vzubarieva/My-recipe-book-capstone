import React from "react";
import ReusableForm from "./ReusableForm";
import { IRecipe, IRecipeForm } from "../models/Recipe";

interface IEditRecipeFormProps {
  onEditRecipe: (recipe: IRecipeForm) => void;
  recipe: IRecipe;
}

function EditRecipeForm({ recipe, onEditRecipe }: IEditRecipeFormProps) {
  function handleEditRecipeFormSubmission(updatedRecipe: IRecipeForm) {
    onEditRecipe({
      ...updatedRecipe,
      id: recipe.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        recipe={recipe}
        onSubmit={handleEditRecipeFormSubmission}
        buttonText="Update recipe"
      />
    </React.Fragment>
  );
}

export default EditRecipeForm;
