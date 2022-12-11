import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { IRecipe } from "../models/Recipe";

interface IRecipeDetailProps {
  onClickingEdit: (id: string) => void;
  onClickingDelete: (id: string) => void;
  recipe: IRecipe;
}

function RecipeDetail(props: IRecipeDetailProps) {
  const { recipe, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          title={recipe.name}

          // subheader="September 14, 2016"
        />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <button onClick={() => onClickingEdit(recipe.id)}>
            Update recipe
          </button>
          <button onClick={() => onClickingDelete(recipe.id)}>
            Delete recipe
          </button>
        </CardActions>

        <CardContent>
          <Typography paragraph>Directions:</Typography>
          <Typography paragraph>{recipe.directions}</Typography>
          <Typography paragraph>Preparation time:</Typography>
          <Typography paragraph>{recipe.prepTime}</Typography>
          <Typography paragraph>Cooking time:</Typography>
          <Typography paragraph>{recipe.cookingTime}</Typography>
          <Typography>{recipe.comments}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default RecipeDetail;
