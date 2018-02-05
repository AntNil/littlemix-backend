package com.littlemixrecipes.littlemix.controllers;

import java.util.ArrayList;
import java.util.List;

import com.littlemixrecipes.littlemix.services.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;

@Controller
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
	public RecipeEntity getRecipe(int recipeId ){
		return recipeRepository.findOne(recipeId);
	}
	
	@GetMapping(path="/getAllRecipesWithUserId")
	public List<RecipeEntity> getAllRecipesWithUserId(String userId) {
		List<RecipeEntity> recipeList = new ArrayList();
		recipeRepository.findAll().forEach(e ->{
			recipeList.add(e);
		});
		return recipeList;
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
	public List<RecipeEntity> getRecipesByCategory(@RequestParam String category){
		return recipeRepository.findRecipeByCategory(category);
	}
}
