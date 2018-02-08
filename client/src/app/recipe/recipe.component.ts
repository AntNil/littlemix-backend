import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {RecipeService} from "../services/recipe.service";
import {Comment} from "../models/comment.modal";
import {ActivatedRoute} from "@angular/router";
import {User} from "../models/user.modal";
import {UserService} from "../services/user.service";

@Component({

  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})

export class RecipeComponent implements OnInit {
  @Input() comment: Comment;
  @Output() recipeId: number;
  recipe: Recipe;
  currentUser: User;
  hasEditRights: boolean = false;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserService) {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.comment = new Comment();

  }

  ngOnInit() {
    this.recipeService.getRecipe(this.recipeId).then(res => {
      this.recipe = res as Recipe;
      this.currentUser = this.userService.getCurrentUser();

      if(this.recipe.userId == this.currentUser.userId){
        this.hasEditRights = true;
      }else{
        this.hasEditRights = false;
      }
    }).catch(Error);
  }

  registerComment(name: string, comment: string) {
    console.log(this.comment);
    // this.recipeService.saveCommentToDatabase(this.comment);

    this.recipe.commentList.push({name, comment});
  }
}


