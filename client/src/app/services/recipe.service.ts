import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {Comment} from "../models/comment.modal";
import {Rating} from "../models/rating.modal";
import {Observable} from "rxjs/Observable";
import {Route, Router} from "@angular/router";

@Injectable()
export class RecipeService {

  recipes: Recipe[];
  recipe: Recipe;

  constructor(private http:HttpClient, private router : Router ) {
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

  getRecipe(recipeId: number) {
/*    return this.http.get('http://localhost:8080/recipe/getRecipe?recipeId=' + recipeId, {}).subscribe( data => {
      this.recipe = data as Recipe;
    });*/
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'http://localhost:8080/recipe/getRecipe?recipeId=' + recipeId;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.recipe = res as Recipe;
            resolve(res);
          }
        );
    });
    return promise;
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
