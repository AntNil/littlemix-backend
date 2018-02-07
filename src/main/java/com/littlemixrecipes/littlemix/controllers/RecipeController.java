package com.littlemixrecipes.littlemix.controllers;

import java.util.ArrayList;
import java.util.List;

import com.littlemixrecipes.littlemix.services.RecipeRepository;
import com.littlemixrecipes.littlemix.services.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.*;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.entities.UserEntity;

@Controller
@CrossOrigin
@RequestMapping(path="/recipe")
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	@Autowired
	private UserRepository userRepository;
	
	int currentRecipeId;
	
	@PostMapping(path="/create")
	public ResponseEntity createRecipe(@RequestBody RecipeEntity recipeModel) {	
		UserEntity user = userRepository.findOne(recipeModel.getUserId());
		user.getRecipeList().add(recipeModel);
		userRepository.save(user);
		return new ResponseEntity(HttpStatus.OK);
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
	public ResponseEntity<RecipeEntity> updateRecipe(@RequestBody RecipeEntity recipeModel){
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
	public ResponseEntity deleteRecipe(@RequestParam int recipeId){
		RecipeEntity r = recipeRepository.findOne(recipeId);
		recipeRepository.delete(r);
		return new ResponseEntity(HttpStatus.OK);
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
