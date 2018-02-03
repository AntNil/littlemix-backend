import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rating}from "../models/rating.modal";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  rating: Rating;

  constructor(private recipeService: RecipeService) {
    this.rating = new Rating();

  }

  ngOnInit() {
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    });
    this.recipeService.saveCRatingToDatabase(this.rating);
  }

}
