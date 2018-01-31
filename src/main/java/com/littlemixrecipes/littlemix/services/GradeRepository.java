package com.littlemixrecipes.littlemix.services;

import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.GradeEntity;

public interface GradeRepository extends CrudRepository<GradeEntity, Long> {
	
}
