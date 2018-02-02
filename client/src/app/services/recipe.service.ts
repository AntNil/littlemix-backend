import { Injectable } from '@angular/core';
import {Recipe} from "../models/recipe.modal";
import {Ingredient} from "../models/ingredient.modal";

@Injectable()
export class RecipeService {

  recipes: Recipe[];

  constructor() {

    this.recipes = [
           {id: 1, userId: 2, title: "Pancakes", imgURL: "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg",
           ingredient: [new Ingredient("Egg", "2"), new Ingredient("Milk", "5 dl")],
           description: "This is a very good recipe. Eat pancakes.",
           category: "Dairy",
           instruction: "Mix everything well and then fry it in a pan"}
           ,
           {id: 2, userId: 1, title: "Spaghetti", imgURL: "https://elperiodiquito.com/wp-content/uploads/noticias/Pasta-a-la-bolognesa.jpg",
             ingredient: [new Ingredient("Spaghetti", "500g"), new Ingredient("Ground beef", "500g")],
             description: "A small taste of Italy",
             category: "Beef",
             instruction: "You should already know how to do this. Just use your head."}
           ,
          {id: 3, userId: 3, title: "Chicken curry",
            imgURL: "https://www.simplyrecipes.com/wp-content/uploads/2008/05/mango-chicken-curry-horiz-a-1800.jpg",
            ingredient: [new Ingredient("Chicken", "500g"), new Ingredient("Curry", "500g")],
            description: "I hope you like curry because, guuurl, you'll be having a lot of it. Some people "
            + "really love curry, and I am one of those people. 500g of curry is fucking NOTHING!! I could eat "
            + "like an entire bathtub of curry all at once. That's how badass I am. Are you that badass? What?? "
            + "I DIDN'T FUCKING HEAR YOU!!!! THEN MAKE THIS FUCKING RECIPES THEN!!",
            category: "Poultry",
            instruction: "Once I was in India and I got this really big box" +
            "filled with curry so now I put a lot of curry into everything and it is great."}
            ,
          {id: 4, userId: 1, title: "Black pudding",
            imgURL: "http://3.bp.blogspot.com/-ybxvrJLwjQA/UPGKc3gRDXI/AAAAAAAAEqU/67poMCWLVnI/s640/IMG_4340.JPG",
            ingredient: [new Ingredient("Blood", "500g"), new Ingredient("Eggs", "2")],
            description: "A small taste of blood",
            category: "Blood",
            instruction: "Just tap the nearest living thing of blood and you're good to go! Mix well and fry in a pan."}
      ];
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

}
