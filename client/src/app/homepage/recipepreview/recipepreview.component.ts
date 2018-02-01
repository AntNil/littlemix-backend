import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../models/recipe.modal";

@Component({
  selector: 'app-recipepreview',
  templateUrl: './recipepreview.component.html',
  styleUrls: ['./recipepreview.component.css']
})
export class RecipepreviewComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(), new Recipe()
      ];
  }

  ngOnInit() {
    console.log(this.recipes);
  }

}
