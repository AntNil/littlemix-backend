package com.littlemixrecipes.littlemix.services;

import org.junit.Test;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;

public class RecipeRepositoryTest {
	
	@Test
	public void testRecipeRepositoryCRUD(){
		RecipeEntity recipe = new RecipeEntity();
		recipe.setRecipeTitle("Gurkpizza");
		recipe.setCategory("Vegetariskt");
		recipe.setRecipeText("Använd gurka som pizzabotten. Gurka som topping. Och pressad gurka som sås");
		recipe.setUserName("Anton");
			
		RecipeRepository recipeService = null;
			
		recipeService.save(recipe);
	}
}
