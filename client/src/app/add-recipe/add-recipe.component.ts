import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.modal";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;

  constructor() {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

}
