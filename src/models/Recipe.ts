export interface IRecipe {
  id: string;
  author: string; // user.uid
  name: string;
  ingredients: string;
  directions: string;
  prepTime: number;
  cookingTime: number;
  comments: string;
}
