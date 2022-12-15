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
  Stack,
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
            Method:
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
          <Stack direction={"row"} spacing={2}>
            <Button
              onClick={() => onClickingEdit(recipe.id)}
              type="submit"
              color="secondary"
              variant="contained"
              // endIcon={<ArrowForwardIosIcon />}
            >
              Update recipe
            </Button>

            <Button
              onClick={() => onClickingDelete(recipe.id)}
              type="submit"
              color="secondary"
              variant="contained"
              // endIcon={<ArrowForwardIosIcon />}
            >
              Delete recipe
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default RecipeDetail;
