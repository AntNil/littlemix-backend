import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";
import {Router} from "@angular/router";
import {User} from "../models/user.modal";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;
  categories: string [];
  ingredients: Ingredient;
  userId: number;

  constructor(private recipeService: RecipeService,
              private router: Router) {
    this.recipe = new Recipe();
    this.categories = new Array();
    this.ingredients = new Ingredient();
    this.recipe.ingredientsList = new Array();
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.userId = +user.userId;

  }

  ngOnInit() {
    this.setCategories();
    this.recipe.userId = this.userId;
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");

  }


  addRecipe() {
    this.recipeService.createRecipe(this.recipe).subscribe( data =>{
      this.router.navigate(["/home"]);
    },()=>{
      console.log("You didn't save your recipe");
    })


  }

  onSelect(value) {
    this.recipe.category = value;
  }

  addIngredient() {
    console.log(this.ingredients);
    this.recipe.ingredientsList.push(this.ingredients);
    this.ingredients = new Ingredient();
  }
}
