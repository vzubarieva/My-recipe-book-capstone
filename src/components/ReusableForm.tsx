import {
  TextField,
  textFieldClasses,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import React, { FormEvent } from "react";
import { IRecipe } from "../models/Recipe";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import { Box } from "@mui/system";

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
      <Card sx={{ backgroundColor: "#ffffffcc" }}>
        <CardHeader title="New recipe" subheader="create new recipe" />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "block",
              }}
              label="Recipe Name"
              name="recipeName"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              defaultValue={recipe?.name}
            />
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "block",
              }}
              label="Ingredients"
              name="ingredients"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              multiline
              rows={3}
              defaultValue={recipe?.ingredients}
            />
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "block",
              }}
              label="Directions"
              name="directions"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              multiline
              rows={3}
              defaultValue={recipe?.directions}
            />
            <TextField
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">min</InputAdornment>
                ),
              }}
              label="Preparation time"
              name="prepTime"
              color="secondary"
              id="outlined-start-adornment"
              defaultValue={recipe?.prepTime}
            />
            {/* <TextField
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]",
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
          name="prepTime"
          label="Preparation time"
          type={"number"}
          
        /> */}

            {/* <input
          type="number"
          name="prepTime"
          placeholder="Preparation time"
          defaultValue={recipe?.prepTime}
        /> */}
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">min</InputAdornment>
                ),
              }}
              name="cookingTime"
              label="Cooking time"
              color="secondary"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              defaultValue={recipe?.cookingTime}
            />
            {/* <input type="number" name="cookingTime" placeholder="Cooking time" /> */}
            <TextField
              sx={{
                marginTop: 3,
                marginBottom: 3,
                display: "block",
              }}
              label="Comments"
              name="comments"
              variant="outlined"
              color="secondary"
              fullWidth
              defaultValue={recipe?.comments}
            />
            {/* </form> */}

            <Button
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
          </form>{" "}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default ReusableForm;
