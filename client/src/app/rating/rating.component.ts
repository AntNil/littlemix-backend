import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rating}from "../models/rating.modal";
import {Recipe}from "../models/recipe.modal";
import {RecipeService} from "../services/recipe.service";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  @Input() inputrating: number;
  @Input() finalGrade: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() recipe: Recipe;
  rating: Rating;



  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.recipeService.fetchGrades(this.recipe.recipeId).then(res => {
        this.finalGrade = this.recipeService.getFinalGrade();
        this.inputrating = this.recipeService.getGrade();
        }).catch(Error);
    }, 500);
    window.setTimeout(() => {this.emitNumber();}, 1000);
  }

  emitNumber() {
    this.ratingClick.emit({
      inputrating: this.inputrating
    });
  }

  onClick(inputrating: number): void {
      this.inputrating = inputrating;
    this.ratingClick.emit({
      inputrating: inputrating
    });
    this.recipeService.saveCRatingToDatabase(inputrating, this.recipe.recipeId);
    window.setTimeout(() => {
      this.recipeService.fetchGrades(this.recipe.recipeId).then(() => {
        this.finalGrade = this.recipeService.finalGrade;
        this.inputrating = this.recipeService.grade});
    }, 100);
  }

}
