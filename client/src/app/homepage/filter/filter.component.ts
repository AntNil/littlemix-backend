import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: string [];

  constructor(private recipeService: RecipeService) {
    this.categories = new Array();
  }

  ngOnInit() {
    this.setCategories();
    console.log(this.categories);
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");
  }

  searchButtonPressed(value) {
  this.recipeService.findPerRecipeTitle(value);
  }
  select(value){
this.recipeService.findPerCategory(value);

}
}
