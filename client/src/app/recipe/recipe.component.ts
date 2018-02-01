import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";


@Component({

  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})



export class RecipeComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();


  recipe: Recipe;
  ingredient: Ingredient[];



  constructor() {

    this.ingredient = [
      new Ingredient('Bread', '1 slice'),
      new Ingredient('Bacon', '2 slices')
    ];
    this.recipe = new Recipe;
    this.recipe.title = 'Title';
    this.recipe.description = 'Work, work, work!';

  }


  ngOnInit() {
    console.log(this.ingredient);
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });

  }
}

