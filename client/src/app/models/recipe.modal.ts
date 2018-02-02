import {Ingredient} from "./ingredient.modal";
export class Recipe {

  id: number;
  userId: number;
  title: string;
  category: string;
  imgURL: string;
  ingredient: Ingredient[];
  description: string;
  instruction: string;

  constructor() {

  }
}
