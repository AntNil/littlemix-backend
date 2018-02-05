package com.littlemixrecipes.littlemix.services;


import com.littlemixrecipes.littlemix.entities.RecipeEntity;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RecipeRepository extends CrudRepository<RecipeEntity, Integer> {

	@Query("SELECT r from RecipeEntity r where r.userId =:userId")
    List<RecipeEntity> findRecipeWithUserId(@Param("userId") int userId);
	
	@Query("SELECT r from RecipeEntity r where r.category =:category")
	List<RecipeEntity> findRecipeByCategory(@Param("category") String category);
}
