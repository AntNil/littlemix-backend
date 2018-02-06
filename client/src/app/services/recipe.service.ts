import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {Comment} from "../models/comment.modal";
import {Rating} from "../models/rating.modal";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipeService {

  recipes: Recipe[];

  constructor(private http:HttpClient) {
    this.recipes = [
      {
        recipeId: 1, userId: 2, recipeTitle: "Pancakes", imgURL: "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg",
        ingredientsList: [{ingredientName: "Eggs", amount: "2"},],
        description: "This is a very good recipe. Eat pancakes.",
        category: "Dairy",
        recipeText: "Mix everything well and then fry it in a pan",
        gradeList: {rating: 3},
        commentList: [{name: "Markus", comment: "Heyho"}, {name: "Sofia", comment:"Nu uh"}]
      }
      ,
      {
        recipeId: 2,
        userId: 1,
        recipeTitle: "Spaghetti",
        imgURL: "https://elperiodiquito.com/wp-content/uploads/noticias/Pasta-a-la-bolognesa.jpg",
        ingredientsList: [{ingredientName: "Spaghetti", amount: "500g"}, {ingredientName: "Ground beef", amount: "500g"}],
        description: "A small taste of Italy",
        category: "Beef",
        recipeText: "You should already know how to do this. Just use your head.",
        gradeList: {rating: 5},
        commentList: [{name: "Markus", comment: "Heyho"}, {name: "Sofia", comment:"Nu uh"}]
      }
      ,
      {
        recipeId: 3, userId: 3, recipeTitle: "Chicken curry",
        imgURL: "https://www.simplyrecipes.com/wp-content/uploads/2008/05/mango-chicken-curry-horiz-a-1800.jpg",
        ingredientsList: [{ingredientName: "Chicken", amount: "500g"}, {ingredientName: "Curry", amount: "500g"}],
        description: "I hope you like curry because, guuurl, you'll be having a lot of it. Some people "
        + "really love curry, and I am one of those people. 500g of curry is fucking NOTHING!! I could eat "
        + "like an entire bathtub of curry all at once. That's how badass I am. Are you that badass? What?? "
        + "I DIDN'T FUCKING HEAR YOU!!!! THEN MAKE THIS FUCKING RECIPES THEN!!",
        category: "Poultry",
        recipeText: "Once I was in India and I got this really big box" +
        "filled with curry so now I put a lot of curry into everything and it is great.",
        gradeList: {rating: 3},
        commentList: [{name: "Markus", comment: "Heyho"}, {name: "Sofia", comment:"Nu uh"}]
      }
      ,
      {
        recipeId: 4, userId: 1, recipeTitle: "Black pudding",
        imgURL: "http://3.bp.blogspot.com/-ybxvrJLwjQA/UPGKc3gRDXI/AAAAAAAAEqU/67poMCWLVnI/s640/IMG_4340.JPG",
        ingredientsList: [{ingredientName: "Spaghetti", amount: "500g"}, {ingredientName: "Ground beef", amount: "500g"}],
        description: "A small taste of blood",
        category: "Blood",
        recipeText: "Just tap the nearest living thing of blood and you're good to go! Mix well and fry in a pan.",
        gradeList: {rating: 2},
        commentList: [{name: "Markus", comment: "Heyho"}, {name: "Sofia", comment:"Nu uh"}]
      }];
    this.findAll();
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
    this.createRecipe(recipe);
  }

  getRecipe(recipeId: number) : Recipe {
    for(let i = 0; i < this.recipes.length; i++)
    {
      if(this.recipes[i].recipeId == recipeId){
        return this.recipes[i];
      }
    }
  }

  public createRecipe(recipe: Recipe)
  {
    this.http.post('http://localhost:8080/recipe/create', recipe).subscribe(data => {
      console.log(data);
    });
  }

  public findAll()
  {
    this.http.get('http://localhost:8080/recipe/getAllRecipes').subscribe(data => {
        let inRecipes = data as Array<Object>;
        let outRecipes = new Array<Recipe>();
        for(var i = 0; i < inRecipes.length; i++)
        {
          console.log(data[i]);
          var recipe = new Recipe();
          recipe.recipeId = data[i].recipeId;
          recipe.recipeTitle = data[i].recipeTitle;
          recipe.category = data[i].category;
          recipe.userId = data[i].userId;
          recipe.description = data[i].description;
          recipe.imgURL = data[i].imgURL;
          recipe.recipeText = data[i].recipeText;
          recipe.gradeList = {rating: 5};
          recipe.ingredientsList = data[i].ingredientsList;
          recipe.commentList = new Array<Comment>();
          this.recipes.push(recipe);
        }
    });

  }

  removeRecipe(recipe: Recipe) {
    this.http.delete('http://localhost:8080/recipe/delete?recipeId=' + recipe.recipeId).subscribe(data => {
      console.log(data);
    });
  }
}
