import {Ingredient} from "./ingredient.modal";
export class Recipe {

  id: number;
  title: string;
  imgURL: string;
  ingredient: Ingredient[];
  description: string;
}
