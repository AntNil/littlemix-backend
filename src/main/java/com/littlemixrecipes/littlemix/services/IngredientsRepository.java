package com.littlemixrecipes.littlemix.services;

import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.IngredientsEntity;

public interface IngredientsRepository extends CrudRepository<IngredientsEntity, Long> {

}
