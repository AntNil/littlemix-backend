import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";
import {Comment}from "../models/comment.modal";
import {Rating}from "../models/rating.modal";

@Component({

  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})



export class RecipeComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();


  comment: Comment;
  commentList: Comment[];

  rating: Rating;
  recipe: Recipe;
  ingredient: Ingredient[];



  constructor(private recipeService: RecipeService) {
    this.comment = new Comment();
    this.rating = new Rating();

    this.ingredient = [
      new Ingredient('Bread', '1 slice'),
      new Ingredient('Bacon', '2 slices')
    ];
    this.commentList = [
      {name: "Namn", comment: "Comment"},

    ];

    this.recipe = new Recipe;
    this.recipe.imgURL = 'https://d1doqjmisr497k.cloudfront.net/-/media/schwartz/recipes/800x800/bacon_sandwich_800.ashx?vd=20160802T004146Z&ir=1&width=600&height=600&crop=auto&quality=75&speed=0&hash=E34ACE89265017EAE6FA80D499960D876B388F200';
    this.recipe.title = 'Title';
    this.recipe.description = 'Work, work, work!';


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
  registerComment(name: string , comment: string){
    console.log(this.comment);
    this.recipeService.saveCommentToDatabase(this.comment);
    this.commentList = [
      {name,comment}
    ]
  }
}

