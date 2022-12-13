import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { IRecipe } from "../models/Recipe";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IRecipeDetailProps {
  onClickingEdit: (id: string) => void;
  onClickingDelete: (id: string) => void;
  recipe: IRecipe;
}

function RecipeDetail(props: IRecipeDetailProps) {
  const { recipe, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <Card sx={{ backgroundColor: "#ffffffcc" }}>
        <CardHeader
          title={
            <Typography
              variant="h3"
              sx={{ fontFamily: "EB Garamond", textAlign: "center" }}
            >
              {recipe.name}
            </Typography>
          }

          // subheader="September 14, 2016"
        />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="h5" color="text.primary">
            {recipe.ingredients}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph variant="h4">
            Directions:
          </Typography>
          <Typography paragraph variant="h5">
            {recipe.directions}
          </Typography>
          <Typography paragraph variant="h4">
            Preparation time:
          </Typography>
          <Typography paragraph variant="h5">
            {recipe.prepTime} min
          </Typography>
          <Typography paragraph variant="h4">
            Cooking time:
          </Typography>
          <Typography paragraph variant="h5">
            {recipe.cookingTime} min
          </Typography>
          <Typography variant="h5">{recipe.comments}</Typography>
          <Button
            onClick={() => onClickingEdit(recipe.id)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              marginRight: 3,
              marginLeft: 1,
              display: "flex",
            }}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<ArrowForwardIosIcon />}
          >
            Update recipe
          </Button>

          <Button
            onClick={() => onClickingDelete(recipe.id)}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              marginRight: 3,
              marginLeft: 1,

              display: "flex",
            }}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<ArrowForwardIosIcon />}
          >
            Delete recipe
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default RecipeDetail;
