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
  recipe: Recipe;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.comment = new Comment();

  }

  ngOnInit() {
    this.recipeService.getRecipe(this.recipeId).then(res => {
      this.recipe = res as Recipe;
    }).catch(Error);
  }

  registerComment(name: string, comment: string) {
    console.log(this.comment);
    // this.recipeService.saveCommentToDatabase(this.comment);

    this.recipe.commentList.push({name, comment});
  }
}


