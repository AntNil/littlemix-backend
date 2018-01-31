package com.littlemixrecipes.littlemix.services;

import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.CommentEntity;

public interface CommentRepository extends CrudRepository<CommentEntity, Long> {

}
