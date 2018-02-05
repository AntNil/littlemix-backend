import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";
import {RecipeService} from "../services/recipe.service";
import {Comment} from "../models/comment.modal";
import {Rating} from "../models/rating.modal";

@Component({

  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input() comment: Comment;
  @Input() recipeId: number;
  commentList: Comment[];

  recipe: Recipe;
  recipes: Recipe[];
  ingredient: Ingredient[];
  rating: Rating;



  constructor( private recipeService: RecipeService) {
    //this.recipeId = recipeId;
   // console.log(recipeId);
    this.comment = new Comment();
    this.commentList = [
      {name: "Namn", comment: "Comment"},
    ];

    this.comment = new Comment();

  }
  ngOnInit() {
    this.getRecipes();
    this.getIngredient();
    this.getRating();

  }

  registerComment(name: string , comment: string) {
    console.log(this.comment);
    this.recipeService.saveCommentToDatabase(this.comment);
    this.commentList = [
      {name, comment}
    ];
  }
  private getRecipes(): void {
    this.recipes = this.recipeService.recipes;
  }

  private getRecipe(recipeId: number)
  {
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }
  private getIngredient(): void {
    this.ingredient = this.recipeService.recipes[this.recipeId].ingredient;
  }
  private getRating(): void {
    this.rating = this.recipeService.recipes[this.recipeId].rating;
  }
}

