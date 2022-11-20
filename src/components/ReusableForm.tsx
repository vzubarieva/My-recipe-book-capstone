import React, { FormEvent } from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeDetailProps {
  onSubmit: (recipe: IRecipe) => void;
  buttonText: string;
}
function ReusableForm(props: IRecipeDetailProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    props.onSubmit({
      name: formData.recipeName.value,
      ingredients: formData.ingredients.value,
      directions: formData.directions.value,
      prepTime: formData.prepTime.value,
      cookingTime: formData.cookingTime.value,
      comments: formData.comments.value,
      id: "",
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" name="recipeName" placeholder="Name of the recipe" />
        <textarea name="ingredients" placeholder="Ingredients" />
        <textarea name="directions" placeholder="Directions" />
        <input type="number" name="prepTime" placeholder="Preparation time" />
        <input type="number" name="cookingTime" placeholder="Cooking time" />
        <input type="text" name="comments" placeholder="Comments" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;
