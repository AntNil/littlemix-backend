import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rating}from "../models/rating.modal";
import {Recipe}from "../models/recipe.modal";
import {RecipeService} from "../services/recipe.service";



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() inputrating: number;

  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  rating: Rating;
  @Input() recipe: Recipe;



  constructor(private recipeService: RecipeService) {


    //.rating = this.recipe.rating;
    //this.setRatingValue(4);


  }

  ngOnInit() {
    //this.rating = this.recipe.rating;
/*    console.log(this.recipe);
    this.rating = this.recipe.gradeList;*/
    this.setRatingValue(this.rating.rating);
  }
  onClick(inputrating: number): void {
    this.inputrating = inputrating;
    this.ratingClick.emit({
      inputrating: inputrating
    });
    this.recipeService.saveCRatingToDatabase(this.rating);
  }

  public setRatingValue(inputrating: number){
    console.log(inputrating);
    this.inputrating = inputrating;
    this.ratingClick.emit({
      inputrating: inputrating
    })

  }
  public getRating(recipeId: number): void {
/*    this.rating = this.recipeService.recipes[recipeId].gradeList;*/
  }

}
