import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {Comment} from "../models/comment.modal";
import {Rating} from "../models/rating.modal";

@Injectable()
export class RecipeService {

  recipes: Recipe[];

  constructor(private http:HttpClient) {

    this.recipes = [
      {
        id: 1, userId: 2, title: "Pancakes", imgURL: "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg",
        ingredient: [{name: "Eggs", amount: "2"},],
        description: "This is a very good recipe. Eat pancakes.",
        category: "Dairy",
        instruction: "Mix everything well and then fry it in a pan",
        rating: {rating: 3}
      }
      ,
      {
        id: 2,
        userId: 1,
        title: "Spaghetti",
        imgURL: "https://elperiodiquito.com/wp-content/uploads/noticias/Pasta-a-la-bolognesa.jpg",
        ingredient: [{name: "Spaghetti", amount: "500g"}, {name: "Ground beef", amount: "500g"}],
        description: "A small taste of Italy",
        category: "Beef",
        instruction: "You should already know how to do this. Just use your head.",
        rating: {rating: 5}
      }
      ,
      {
        id: 3, userId: 3, title: "Chicken curry",
        imgURL: "https://www.simplyrecipes.com/wp-content/uploads/2008/05/mango-chicken-curry-horiz-a-1800.jpg",
        ingredient: [{name: "Chicken", amount: "500g"}, {name: "Curry", amount: "500g"}],
        description: "I hope you like curry because, guuurl, you'll be having a lot of it. Some people "
        + "really love curry, and I am one of those people. 500g of curry is fucking NOTHING!! I could eat "
        + "like an entire bathtub of curry all at once. That's how badass I am. Are you that badass? What?? "
        + "I DIDN'T FUCKING HEAR YOU!!!! THEN MAKE THIS FUCKING RECIPES THEN!!",
        category: "Poultry",
        instruction: "Once I was in India and I got this really big box" +
        "filled with curry so now I put a lot of curry into everything and it is great.",
        rating: {rating: 3}
      }
      ,
      {
        id: 4, userId: 1, title: "Black pudding",
        imgURL: "http://3.bp.blogspot.com/-ybxvrJLwjQA/UPGKc3gRDXI/AAAAAAAAEqU/67poMCWLVnI/s640/IMG_4340.JPG",
        ingredient: [{name: "Spaghetti", amount: "500g"}, {name: "Ground beef", amount: "500g"}],
        description: "A small taste of blood",
        category: "Blood",
        instruction: "Just tap the nearest living thing of blood and you're good to go! Mix well and fry in a pan.",
        rating: {rating: 2}
      }];
  }



  getRecipes(): Recipe[] {
    return this.recipes;
  }

  saveCommentToDatabase(comment: Comment) {
    console.log(comment);
  }
  saveCRatingToDatabase(rating: Rating) {
    console.log(rating);
  }

  saveRecipeToDatabase(recipe: Recipe) {
    console.log(recipe);
  }

  getRecipe(recipeId: number) : Recipe {
    for(let i = 0; i < this.recipes.length; i++)
    {
      if(this.recipes[i].id == recipeId){
        return this.recipes[i];
      }
    }
  }

  public findAll()
  {
    this.http.get('localhost:8080/recipe/getAllRecipes').subscribe(data => {
      console.log(data);
    });

  }
}
