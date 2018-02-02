import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../models/recipe.modal";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipepreview',
  templateUrl: './recipepreview.component.html',
  styleUrls: ['./recipepreview.component.css']
})
export class RecipepreviewComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipes = this.recipeService.recipes;
  }

}
