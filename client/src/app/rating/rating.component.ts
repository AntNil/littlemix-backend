import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Rating}from "../models/rating.modal";
import {Recipe}from "../models/recipe.modal";
import {RecipeService} from "../services/recipe.service";
import Events = NodeJS.Events;



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() inputrating: number;
  @Input() recipeId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  rating: Rating;
  recipe:  Recipe;



  constructor(private recipeService: RecipeService) {
    console.log(this.recipeId);
    this.rating = this.recipe.rating;
    //this.setRatingValue(4);


  }

  ngOnInit() {
  }
  onClick(inputrating: number): void {
    this.inputrating = inputrating;
    this.ratingClick.emit({
      inputrating: inputrating
    });
    this.recipeService.saveCRatingToDatabase(this.rating);
  }

  public setRatingValue(inputrating: number){
    this.inputrating = inputrating;
    this.ratingClick.emit({
      inputrating: inputrating
    })

  }
  public getRating(recipeId: number): void {
    this.rating = this.recipeService.recipes[recipeId].rating;
  }

}
