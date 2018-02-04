package com.littlemixrecipes.littlemix.services.repositories;


import com.littlemixrecipes.littlemix.entities.CommentEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends CrudRepository<CommentEntity, Integer> {

    @Query("Select c from CommentEntity c where c.recipeId =:recipeId")
    List<CommentEntity> findByRecipeId(@Param("recipeId") int recipeId);


}
