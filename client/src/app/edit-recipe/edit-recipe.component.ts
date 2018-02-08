import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/recipe.modal";
import {ActivatedRoute, Route, Router} from "@angular/router";

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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {

    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.categories = new Array();
    this.ingredients = new Ingredient();
    this.recipe = this.recipeService.recipe;
  }

  ngOnInit() {
    this.setCategories();
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");

  }

  addIngredient() {
    this.recipe.ingredientsList.push(this.ingredients);
    this.ingredients = new Ingredient();
  }

  removeIngredient(i: number) {
    console.log("Trying to remove at index " + i);
    let ingredient = this.recipe.ingredientsList[i];
    this.recipe.ingredientsList = this.recipe.ingredientsList.filter(obj => obj !== ingredient);
  }

  removeRecipe() {
    this.recipeService.removeRecipe(this.recipe);
    window.setTimeout(() => {
      this.recipeService.findAll().then(res => {
        this.goToStartPage()
      });
    }, 300);
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.recipe);
    window.setTimeout(() => {
      this.recipeService.findAll().then(res => {
        this.goToStartPage()
      });
    }, 300);
  }

  goToStartPage() {
    this.router.navigate(['/home']);
  }

  onSelect(value)
  {
    this.recipe.category = value;
  }
}
