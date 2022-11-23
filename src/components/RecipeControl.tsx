import React, { useState } from "react";
import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import EditRecipeForm from "./EditRecipeForm";
import RecipeDetail from "./RecipeDetail";
import { IRecipe } from "../models/Recipe";

const RecipeControl = () => {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState<boolean>(false);
  const [mainRecipeList, setMainRecipeList] = useState<Array<IRecipe>>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<null | IRecipe>(null);
  const [editing, setEditing] = useState<boolean>(false);

  const handleClick = () => {
    if (selectedRecipe != null) {
      setFormVisibleOnPage(false);
      setSelectedRecipe(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingRecipe = (id: string) => {
    const newMainRecipeList = mainRecipeList.filter(
      (recipe) => recipe.id !== id
    );
    setMainRecipeList(newMainRecipeList);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingRecipeInList = (recipeToEdit: IRecipe) => {
    const editedMainRecipeList = mainRecipeList
      .filter((recipe) => recipe.id !== selectedRecipe?.id)
      .concat(recipeToEdit);
    setMainRecipeList(editedMainRecipeList);
  };

  const handleAddingNewRecipeToList = (newRecipe: IRecipe) => {
    const newMainRecipeList = mainRecipeList.concat(newRecipe);
    setMainRecipeList(newMainRecipeList);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedRecipe = (id: string) => {
    const selectedRecipe = mainRecipeList.filter(
      (recipe) => recipe.id === id
    )[0];
    setSelectedRecipe(selectedRecipe);
  };

  // render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing && selectedRecipe) {
    currentlyVisibleState = (
      <EditRecipeForm
        recipe={selectedRecipe}
        onEditRecipe={handleEditingRecipeInList}
      />
    );
    buttonText = "Return to recipe List";
  } else if (selectedRecipe != null) {
    currentlyVisibleState = (
      <RecipeDetail
        recipe={selectedRecipe}
        onClickingDelete={handleDeletingRecipe}
        onClickingEdit={handleEditClick}
      />
    );
    buttonText = "Return to recipe List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = (
      <NewRecipeForm onNewRecipeCreation={handleAddingNewRecipeToList} />
    );
    buttonText = "Return to recipe List";
  } else {
    currentlyVisibleState = (
      <RecipeList
        onRecipeSelection={handleChangingSelectedRecipe}
        recipeList={mainRecipeList}
      />
    );
    buttonText = "Add recipe";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
};
// }
export default RecipeControl;
