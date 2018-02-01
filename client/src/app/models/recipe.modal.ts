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
    this.id = 1;
    this.userId = 2;
    this.title = "Pancakes";
    this.imgURL = "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg";
    this.ingredient = [new Ingredient("Egg", "2"), new Ingredient("Milk", "5 dl")];
    this.description = "This is a very good recipe. Eat pancakes.";
    this.category = "Dairy";
    this.instruction = "Mix everything well and then fry it in a pan";
  }
}
