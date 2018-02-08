import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../models/recipe.modal";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipes = this.recipeService.recipes;
  }
}
