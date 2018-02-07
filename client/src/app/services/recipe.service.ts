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
    this.recipes = new Array<Recipe>();
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

  public updateRecipe(recipe: Recipe)
  {
    this.http.put('http://localhost:8080/recipe/update', recipe).subscribe(data => {
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
          var recipe = data[i];
          this.recipes.push(recipe);
        }
    });
  }

  public findPerCategory(category: string) : Recipe[]
  {
    this.http.post('http://localhost:8080/recipe/getByCategory', {"category": category}).subscribe( data => {
      let inRecipes = data as Array<Object>;
      this.recipes = new Array<Recipe>();
      for(var i = 0; i < inRecipes.length; i++)
      {
        this.recipes.push(data[i]);
      }
    });
    return this.recipes;
  }

  removeRecipe(recipe: Recipe) {
    this.http.delete('http://localhost:8080/recipe/delete?recipeId=' + recipe.recipeId).subscribe(data => {
      console.log(data);
    });
  }
}
