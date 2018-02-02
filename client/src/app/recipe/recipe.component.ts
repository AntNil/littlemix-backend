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
  @Input() submitComment: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();


  recipe: Recipe;
  ingredient: Ingredient[];



  constructor() {

    this.ingredient = [
      new Ingredient(),
      new Ingredient()
    ];
    this.recipe = new Recipe;
    this.recipe.imgURL = 'https://d1doqjmisr497k.cloudfront.net/-/media/schwartz/recipes/800x800/bacon_sandwich_800.ashx?vd=20160802T004146Z&ir=1&width=600&height=600&crop=auto&quality=75&speed=0&hash=E34ACE89265017EAE6FA80D499960D876B388F200';
    this.recipe.ingredient
    this.recipe.title = 'Title';
    this.recipe.description = 'Work, work, work!';

  }


  ngOnInit() {
    console.log(this.recipe);
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });

  }

}

