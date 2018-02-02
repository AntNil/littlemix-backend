import { Injectable } from '@angular/core';
import {Comment} from "../models/comment.modal";
import {Rating} from "../models/rating.modal";

@Injectable()
export class RecipeService {

  constructor() { }
  saveCommentToDatabase(comment: Comment) {
    console.log(comment);
  }
  saveCRatingToDatabase(rating: Rating) {
    console.log(rating);
  }
}
