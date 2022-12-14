import { IRecipe } from "../models/Recipe";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
interface IRecipeProps {
  whenRecipeClicked: (id: string) => void;
  recipe: IRecipe;
}

function Recipe({ recipe, whenRecipeClicked }: IRecipeProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={3} sx={{ maxWidth: 345, backgroundColor: "#ffffffcc" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red["A400"] }} aria-label="recipe">
            VZ
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
          <Typography
            variant="h4"
            onClick={() => whenRecipeClicked(recipe.id)}
            sx={{
              cursor: "pointer",
              fontFamily: "EB Garamond",
            }}
          >
            {recipe.name}
          </Typography>
        }
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.coverUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          // variant="h6"
          variant="body2"
          color="text.primary"
          sx={{ fontFamily: "Roboto", maxHeight: 300 }}
        >
          {recipe.ingredients}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h6">
            Method:
          </Typography>
          <Typography paragraph>{recipe.directions}</Typography>
          <Typography paragraph variant="h6">
            Preparation time:
          </Typography>
          <Typography paragraph>{recipe.prepTime} min</Typography>
          <Typography paragraph variant="h6">
            Cooking time:
          </Typography>
          <Typography paragraph>{recipe.cookingTime} min</Typography>
          <Typography>{recipe.comments}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Recipe;
