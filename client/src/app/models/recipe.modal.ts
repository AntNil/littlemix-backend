import {Ingredient} from "./ingredient.modal";
export class Recipe {

  id: number;
  title: string;
  imgURL: string;
  ingredient: Ingredient[];
  description: string;

  constructor() {
    this.id = 1;
    this.title = "Pancakes";
    this.imgURL = "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg";
    this.ingredient = [new Ingredient("Egg", "2"), new Ingredient("Milk", "5 dl")];
    this.description = "This is a very good recipe. Eat pancakes.";
  }
}
