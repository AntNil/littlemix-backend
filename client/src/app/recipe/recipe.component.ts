import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe[];
  ingredient: Ingredient[];


  recipe = new Recipe();

  constructor() {
   this.ingredient = [
     new Ingredient('Bread', '1 slice'),
       new Ingredient('Bacon', '2 slices')
     ];



    this.recipe.title = 'Title';
    this.recipe.description = 'Work, work, work!';

  }

  ngOnInit() {
    console.log(this.ingredient);
  }


}
