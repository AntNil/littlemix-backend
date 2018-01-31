package com.littlemixrecipes.littlemix.services;

import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;


public interface RecipeRepository extends CrudRepository<RecipeEntity, Long> {

}
