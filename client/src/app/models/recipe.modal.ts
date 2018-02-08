import {Ingredient} from "./ingredient.modal";
import {Comment} from "./comment.modal";
import {Rating} from "./rating.modal";

export class Recipe {

  recipeId: number;
  recipeTitle: string;
  category: string;
  recipeText: string;
  description: string;
  imgURL: string;
  userId: number;
  commentList: Comment[];
  ingredientsList: Ingredient[];
  gradeList: Rating[];


  constructor() {
    this.commentList = new Array<Comment>();
    this.gradeList = new Array<Rating>();
  }
}
