import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.modal";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipepreview',
  templateUrl: './recipepreview.component.html',
  styleUrls: ['./recipepreview.component.css']
})
export class RecipepreviewComponent implements OnInit {
  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    console.log(this.recipes);
  }


}
