import React, { useState } from "react";
import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import EditRecipeForm from "./EditRecipeForm";
import RecipeDetail from "./RecipeDetail";
import { IRecipe } from "../models/Recipe";

interface IRecipeControlProps {}

interface IRecipeControlState {
  formVisibleOnPage: boolean;
  mainRecipeList: Array<IRecipe>;
  selectedRecipe: null | IRecipe;
  editing: boolean;
}

class RecipeControl extends React.Component<
  IRecipeControlProps,
  IRecipeControlState
> {
  constructor(props: IRecipeControlProps) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainRecipeList: [],
      selectedRecipe: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedRecipe: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleDeletingRecipe = (id: string) => {
    const newMainRecipeList = this.state.mainRecipeList.filter(
      (recipe) => recipe.id !== id
    );
    this.setState({
      mainRecipeList: newMainRecipeList,
      selectedRecipe: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingRecipeInList = (recipeToEdit: IRecipe) => {
    const editedMainRecipeList = this.state.mainRecipeList
      .filter((recipe) => recipe.id !== this.state.selectedRecipe?.id)
      .concat(recipeToEdit);

    this.setState({
      mainRecipeList: editedMainRecipeList,
      editing: false,
      selectedRecipe: null,
    });
  };

  handleAddingNewRecipeToList = (newRecipe: IRecipe) => {
    const newMainRecipeList = this.state.mainRecipeList.concat(newRecipe);
    this.setState({ mainRecipeList: newMainRecipeList });
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedRecipe = (id: string) => {
    const selectedRecipe = this.state.mainRecipeList.filter(
      (recipe) => recipe.id === id
    )[0];
    this.setState({ selectedRecipe: selectedRecipe });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing && this.state.selectedRecipe) {
      currentlyVisibleState = (
        <EditRecipeForm
          recipe={this.state.selectedRecipe}
          onEditRecipe={this.handleEditingRecipeInList}
        />
      );
      buttonText = "Return to recipe List";
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState = (
        <RecipeDetail
          recipe={this.state.selectedRecipe}
          onClickingDelete={this.handleDeletingRecipe}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to recipe List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewRecipeForm onNewRecipeCreation={this.handleAddingNewRecipeToList} />
      );
      buttonText = "Return to recipe List";
    } else {
      currentlyVisibleState = (
        <RecipeList
          onRecipeSelection={this.handleChangingSelectedRecipe}
          recipeList={this.state.mainRecipeList}
        />
      );
      buttonText = "Add recipe";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default RecipeControl;
