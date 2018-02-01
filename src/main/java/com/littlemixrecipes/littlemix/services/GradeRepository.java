package com.littlemixrecipes.littlemix.services;


import com.littlemixrecipes.littlemix.entities.GradeEntity;
import org.springframework.data.repository.CrudRepository;

public interface GradeRepository extends CrudRepository<GradeEntity, Integer> {
	
}
