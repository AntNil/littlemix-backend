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
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  rating: Rating;
  ratingValue: number;

  rate1: boolean;
  rate2: boolean;
  rate3:boolean;
  rate4:boolean;
  rate5:boolean;


  constructor(private recipeService: RecipeService) {
    this.rating = new Rating();
    this.setRatingValue(4);


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

  public setRatingValue(rating: number){
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    })
   /* switch(rating) {
      case 1:
        this.rate1 = true;
        this.rate2 = false;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = false;

        break;
      case 2:
        this.rate1 = false;
        this.rate2 = true;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = false;

        break;
      case 3:
        this.rate1 = false;
        this.rate2 = false;
        this.rate3 = true;
        this.rate4 = false;
        this.rate5 = false;

        break;
      case 4:
        this.rate1 = false;
        this.rate2 = false;
        this.rate3 = false;
        this.rate4 = true;
        this.rate5 = false;

        break;
      case 5:
        this.rate1 = false;
        this.rate2 = false;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = true;

        break;
      default:
        this.rate1 = false;
        this.rate2 = false;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = false;
        break;
    }*/

  }

}
