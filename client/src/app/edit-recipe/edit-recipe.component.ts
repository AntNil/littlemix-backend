import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/recipe.modal";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;
  categories: string [];
  ingredients: Ingredient;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {

    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.categories = new Array();
    this.ingredients = new Ingredient();
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }

  ngOnInit() {
    this.setCategories();
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");

  }

  addIngredient() {
    this.recipe.ingredient.push(this.ingredients);
    this.ingredients = new Ingredient();
  }

  removeIngredient(i: number) {
    console.log("Trying to remove at index " + i);
    let ingredient = this.recipe.ingredient[i];
    this.recipe.ingredient = this.recipe.ingredient.filter(obj => obj !== ingredient);
  }
}