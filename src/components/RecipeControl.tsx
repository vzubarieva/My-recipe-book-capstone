import React, { useState, useEffect } from "react";
import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import EditRecipeForm from "./EditRecipeForm";
import RecipeDetail from "./RecipeDetail";
import { IRecipe } from "../models/Recipe";
import { db, auth } from "./../helpers/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { UserAuth } from "../context/AuthContext";

const RecipeControl = () => {
  const { user } = UserAuth();

  const [formVisibleOnPage, setFormVisibleOnPage] = useState<boolean>(false);
  const [mainRecipeList, setMainRecipeList] = useState<Array<IRecipe>>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<null | IRecipe>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "recipes"), where("author", "==", user.uid)),
      (collectionSnapshot) => {
        const recipes: IRecipe[] = [];
        collectionSnapshot.forEach((doc) => {
          recipes.push({
            name: doc.data().name,
            ingredients: doc.data().ingredients,
            directions: doc.data().directions,
            prepTime: doc.data().prepTime,
            cookingTime: doc.data().cookingTime,
            comments: doc.data().comments,
            id: doc.id,
            author: doc.data().author,
          });
        });
        setMainRecipeList(recipes);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedRecipe != null) {
      setFormVisibleOnPage(false);
      setSelectedRecipe(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingRecipe = async (id: string) => {
    await deleteDoc(doc(db, "recipes", id));
    setSelectedRecipe(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingRecipeInList = async (recipeToEdit: IRecipe) => {
    const recipeRef = doc(db, "recipes", recipeToEdit.id);
    await updateDoc(recipeRef, { ...recipeToEdit, author: user.uid });
    setEditing(false);
    setSelectedRecipe(null);
  };

  const handleAddingNewRecipeToList = async (newRecipeData: IRecipe) => {
    const collectionRef = collection(db, "recipes");
    await addDoc(collectionRef, {
      ...newRecipeData,
      author: user.uid,
    }); // const newMainRecipeList = mainRecipeList.concat(newRecipe);
    // setMainRecipeList(newMainRecipeList);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedRecipe = (id: string) => {
    const selectedRecipe = mainRecipeList.filter(
      (recipe) => recipe.id === id
    )[0];
    setSelectedRecipe(selectedRecipe);
  };

  // render() {
  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Please sign in to add recipes.</h1>
      </React.Fragment>
    );
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>;
    } else if (editing && selectedRecipe) {
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
        {error ? null : (
          <Button
            onClick={handleClick}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "flex",
            }}
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            {buttonText}
          </Button>
        )}
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

  return <></>;
};

export default RecipeControl;
