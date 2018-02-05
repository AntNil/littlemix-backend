package com.littlemixrecipes.littlemix.controllers;

import java.util.ArrayList;
import java.util.List;

import com.littlemixrecipes.littlemix.services.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;

@Controller
@CrossOrigin
@RequestMapping(path="/recipe")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	int currentRecipeId;
	
	@PostMapping(path="/create")
	public void createRecipe(@RequestParam RecipeEntity recipeModel) {	
		recipeRepository.save(recipeModel);
	}
	
	@GetMapping(path="/getRecipe")
	public ResponseEntity<RecipeEntity> getRecipe(@RequestParam int recipeId ){
		RecipeEntity recipe = recipeRepository.findOne(recipeId);
		if (recipe == null){
			return new ResponseEntity<RecipeEntity>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<RecipeEntity>(recipe, HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllRecipesWithUserId")
	public ResponseEntity<List<RecipeEntity>> getAllRecipesWithUserId(@RequestParam int userId) {
		List<RecipeEntity> recipeList = new ArrayList();
		if(recipeRepository.findRecipeWithUserId(userId) == null){
			return new ResponseEntity<List<RecipeEntity>>(HttpStatus.NOT_FOUND);
		}
		recipeRepository.findAll().forEach(e ->{
			recipeList.add(e);
		});
		return new ResponseEntity<List<RecipeEntity>>(recipeList, HttpStatus.OK);
	}
	
	@PutMapping(path="/update")
	public ResponseEntity<RecipeEntity> updateRecipe(@RequestParam RecipeEntity recipeModel){
		int currentRecipeId = recipeModel.getRecipeId();
		
		RecipeEntity oldRecipe = recipeRepository.findOne(currentRecipeId);
		if (oldRecipe == null){
            return new ResponseEntity<RecipeEntity>(HttpStatus.NOT_FOUND);
        }
		oldRecipe = recipeModel;
		recipeRepository.save(oldRecipe);
		
		return new ResponseEntity<RecipeEntity>(oldRecipe, HttpStatus.OK);
	}
	
	@DeleteMapping(path="/delete")
	public void deleteRecipe(@RequestParam int recipeId){
		recipeRepository.delete(recipeId);
	}
	
	@GetMapping(path="/getByCategory")
	public ResponseEntity<List<RecipeEntity>> getRecipesByCategory(@RequestParam String category){
		 List<RecipeEntity> recipeList = recipeRepository.findRecipeByCategory(category);
		 if( recipeList == null){
			 return new ResponseEntity<List<RecipeEntity>>(HttpStatus.NOT_FOUND);
		 }
		return new ResponseEntity<List<RecipeEntity>>(recipeList, HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllRecipes")
	public ResponseEntity<List<RecipeEntity>> getAllRecipes() {
		List<RecipeEntity> recipeList = new ArrayList();
		
		if (recipeRepository.findAll() == null){
			return new ResponseEntity<List<RecipeEntity>>(HttpStatus.NOT_FOUND);
		}
		
		recipeRepository.findAll().forEach(e ->{
			recipeList.add(e);
		});
		return new ResponseEntity<List<RecipeEntity>>(recipeList, HttpStatus.OK);
	}
}
