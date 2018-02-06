import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {RecipeService} from "../services/recipe.service";
import {Comment} from "../models/comment.modal";
import {ActivatedRoute} from "@angular/router";

@Component({

  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})

export class RecipeComponent implements OnInit {
  @Input() comment: Comment;
  @Output() recipeId: number;
  commentList: Comment[];
  recipe: Recipe;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });

    console.log(this.recipeId + " from parent class");
    this.comment = new Comment();

  }

  ngOnInit() {
    this.getRecipe(this.recipeId);
    this.commentList = this.recipe.commentList;
  }

  registerComment(name: string, comment: string) {
    console.log(this.comment);
    // this.recipeService.saveCommentToDatabase(this.comment);

    this.commentList.push({name, comment});
  }

  private getRecipe(recipeId: number) {
    this.recipe = this.recipeService.getRecipe(recipeId);
  }
}


