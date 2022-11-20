import React from "react";

interface IRecipeDetailProps {
  formSubmissionHandler: (recipe: IRecipe) => void;
  buttonText: string;
}
function ReusableForm(props: IRecipeDetailProps) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Name of the recipe" />
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

// ReusableForm.propTypes = {
//   formSubmissionHandler: PropTypes.func,
//   buttonText: PropTypes.string
// };

export default ReusableForm;
