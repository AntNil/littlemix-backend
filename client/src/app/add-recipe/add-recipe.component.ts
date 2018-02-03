import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;
  categories: string [];
  ingredients: Ingredient;

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe();
    this.categories = new Array();
    this.ingredients = new Ingredient();
    this.recipe.ingredient = new Array();

  }

  ngOnInit() {
    this.setCategories();
    console.log(this.categories)
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");

  }


  addRecipe() {
    this.recipeService.saveRecipeToDatabase(this.recipe);
  }

  addIngredient() {
    this.recipe.ingredient.push(this.ingredients);
    this.ingredients = new Ingredient();
  }
}
