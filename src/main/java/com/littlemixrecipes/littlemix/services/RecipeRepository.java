package com.littlemixrecipes.littlemix.services;


import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<RecipeEntity, Integer> {

}
