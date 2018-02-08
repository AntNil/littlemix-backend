import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../models/recipe.modal";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: string [];
  @Input() recipes: Recipe[];

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
    if(!value){}
    else {
      this.recipes.length = 0;

      this.recipeService.findPerRecipeTitle(value).then(res => {
        var tempRecipes = res as Array<Recipe>;
        tempRecipes.forEach(recipe => this.recipes.push(recipe));
      });
    }
  }

  select(value){
    this.recipes.length = 0;
    if(value == "All categories")
    {
      this.recipeService.getAllToArray(this.recipes);
    } else {
      this.recipeService.findPerCategory(value).then(res => {
        var tempRecipes = res as Array<Recipe>;
        tempRecipes.forEach(recipe => this.recipes.push(recipe));
      });
    }
  }
}
