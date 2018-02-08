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
  grade: number;
  finalGrade: number;


  constructor(private http:HttpClient, private router : Router ) {
    this.recipes = new Array<Recipe>();
    this.findAll();
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  saveCommentToDatabase(comment: Comment) {
    console.log(comment);
    this.http.post('http://localhost:8080/comment/createComment', {"commentText": comment.commentText, "userName": comment.userName, "recipeId": comment.recipeId}).subscribe( data => {
      console.log(data);
    });

  }
  saveCRatingToDatabase(rating: number, recipeId: number) {
    this.http.post('http://localhost:8080/grade/createGrade', {"gradePoints": rating, "recipeId": recipeId}).subscribe( data => {
      console.log(data);
    });
  }

  fetchGrades(recipeId: number) {
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/grade/getGrade?recipeId=' + recipeId)
        .toPromise()
        .then(res => {
          /*console.log(res);
          resolve(res);*/
          this.finalGrade = parseFloat(res as string);
          this.grade = Math.round(this.finalGrade);
          resolve({"finalGrade": this.finalGrade, "grade": this.grade});
        })
    });
    return promise;
  }

  getGrade() : number {
    return this.grade;
  }

  getFinalGrade() : number {
    return this.finalGrade;
  }


  getRecipe(recipeId: number) {
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

  public createRecipe(recipe: Recipe) {
   return this.http.post('http://localhost:8080/recipe/create', recipe)
    /*.subscribe(data => {
      console.log(data);
    });
    console.log(recipe);*/
  }

  public updateRecipe(recipe: Recipe)
  {
    this.http.put('http://localhost:8080/recipe/update', recipe);
  }

  public findAll()
  {
    this.recipes.length = 0;
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/recipe/getAllRecipes').subscribe(data => {
        let inRecipes = data as Array<Object>;
        for (var i = 0; i < inRecipes.length; i++) {
          var recipe = data[i];
          this.recipes.push(recipe);
          resolve();
        }
      });
    });
    return promise;
  }


  public getAllToArray(inputRecipes: Recipe[])
  {
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/recipe/getAllRecipes').subscribe(data => {
        let inRecipes = data as Array<Object>;
        for (var i = 0; i < inRecipes.length; i++) {
          inputRecipes.push(data[i] as Recipe);
        }
      });
    });
    return promise;
  }

  public findPerCategory(category: string)
  {
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/recipe/getByCategory?category=' + category)
        .toPromise()
        .then(res => {
          console.log(res);
          resolve(res);
        })
    });
    return promise;
  }

  public findPerRecipeTitle(title: string){
    let promise = new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/recipe/getRecipeListFromSearchString?searchString=', title).subscribe(data => {
        let inRecipes = data as Array<Object>;
        this.recipes = new Array<Recipe>();
        for (var i = 0; i < inRecipes.length; i++) {
          this.recipes.push(data[i]);
        }
        resolve(this.recipes);
      });
    });
    return promise;
  }

  removeRecipe(recipe: Recipe) {
    this.http.delete('http://localhost:8080/recipe/delete?recipeId=' + recipe.recipeId).subscribe(data => {
      console.log(data);
    });
  }
}
