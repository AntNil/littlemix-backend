import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Rating}from "../models/rating.modal";
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



  constructor(private recipeService: RecipeService) {
    this.rating = new Rating();
    this.setRatingValue(4);


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
  private getRating(): void {

    this.rating = this.recipeService.recipes[1].rating;
  }

}
