import React, { FormEvent } from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeDetailProps {
  recipe?: IRecipe | null;
  onSubmit: (recipe: IRecipe) => void;
  buttonText: string;
}
function ReusableForm({ buttonText, onSubmit, recipe }: IRecipeDetailProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    onSubmit({
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
        <input
          type="text"
          name="recipeName"
          placeholder="Name of the recipe"
          defaultValue={recipe?.name}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          defaultValue={recipe?.ingredients}
        />
        <textarea
          name="directions"
          placeholder="Directions"
          defaultValue={recipe?.directions}
        />
        <input
          type="number"
          name="prepTime"
          placeholder="Preparation time"
          defaultValue={recipe?.prepTime}
        />
        <input
          type="number"
          name="cookingTime"
          placeholder="Cooking time"
          defaultValue={recipe?.cookingTime}
        />
        <input
          type="text"
          name="comments"
          placeholder="Comments"
          defaultValue={recipe?.comments}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;
