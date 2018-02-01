package com.littlemixrecipes.littlemix.services.repositories;


import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<RecipeEntity, Integer> {

}
