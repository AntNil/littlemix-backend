package com.littlemixrecipes.littlemix.services;


import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import org.springframework.data.repository.CrudRepository;

public interface IngredientsRepository extends CrudRepository<IngredientsEntity, Integer> {

}
