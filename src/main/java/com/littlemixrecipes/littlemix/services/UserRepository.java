package com.littlemixrecipes.littlemix.services;

import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.UserEntity;

public interface UserRepository extends CrudRepository<UserEntity, Integer> {
	
}
