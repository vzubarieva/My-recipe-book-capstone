import {
  TextField,
  Card,
  CardHeader,
  CardContent,
  FormLabel,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { IRecipe, IRecipeForm } from "../models/Recipe";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import MDEditor from "@uiw/react-md-editor";

const AcceptedFileType = {
  Text: ".txt",
  Gif: ".gif",
  Jpeg: ".jpg",
  Png: ".png",
  Doc: ".doc",
  Pdf: ".pdf",
  AllImages: "image/*",
  AllVideos: "video/*",
  AllAudios: "audio/*",
};
interface IRecipeDetailProps {
  recipe?: IRecipe | null;
  onSubmit: (recipe: IRecipeForm) => void;
  buttonText: string;
}
function ReusableForm({ buttonText, onSubmit, recipe }: IRecipeDetailProps) {
  const [directions, setDirections] = useState<string>(recipe?.directions);

  const onDirectionsChange = (value) => {
    setDirections(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    onSubmit({
      name: formData.recipeName.value,
      ingredients: formData.ingredients.value,
      directions,
      prepTime: formData.prepTime.value,
      cookingTime: formData.cookingTime.value,
      comments: formData.comments.value,
      id: "",
      author: "",
      coverPhoto: selectedFiles,
      coverImageId: recipe?.coverImageId || "",
      coverUrl: recipe?.coverUrl || "",
    });
  };

  const fileRef = React.useRef<any>();
  const acceptedFormats = AcceptedFileType.AllImages;
  const [selectedFiles, setSelectedFiles] = React.useState<File>(null);

  const handleFileSelect = (event) => {
    setSelectedFiles(event?.target?.files?.[0]);
  };

  const onClear = () => {
    setSelectedFiles(undefined);
  };

  const onUpdate = (event) => {
    if (event.target.textContent.trim().toLowerCase() === "change") {
      onClear();
      fileRef.current.click();
      return;
    }
    if (event.target.textContent.trim().toLowerCase() === "clear") {
      onClear();
      return;
    }
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
            <>
              <input
                ref={fileRef}
                hidden
                type="file"
                accept={acceptedFormats}
                onChange={handleFileSelect}
              />
              {!selectedFiles?.name && (
                <Button
                  variant="contained"
                  component="label"
                  style={{ textTransform: "none" }}
                  onClick={() => fileRef.current?.click()}
                >
                  Choose file to upload
                </Button>
              )}
              {selectedFiles?.name && (
                <Button
                  variant="contained"
                  component="label"
                  style={{ textTransform: "none" }}
                  onClick={onUpdate}
                >
                  <span style={{ float: "left" }}> {selectedFiles?.name}</span>
                  <span style={{ padding: "10px" }}> Change</span>
                  <span>Clear</span>
                </Button>
              )}
            </>
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
            <FormLabel>Directions:</FormLabel>
            <MDEditor value={directions} onChange={onDirectionsChange} />

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
