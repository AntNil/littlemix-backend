package com.littlemixrecipes.littlemix.services.repositories;


import com.littlemixrecipes.littlemix.entities.CommentEntity;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<CommentEntity, Integer> {

}
