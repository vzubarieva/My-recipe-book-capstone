export interface IRecipe {
  id: string;
  author: string; // user.uid
  name: string;
  ingredients: string;
  directions: string;
  prepTime: number;
  cookingTime: number;
  comments: string;
  coverImageId: string;
  coverUrl: string;
}

export interface IRecipeForm extends IRecipe {
  coverPhoto: File;
}
