package com.littlemixrecipes.littlemix.services.repositories;


import com.littlemixrecipes.littlemix.entities.GradeEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GradeRepository extends CrudRepository<GradeEntity, Integer> {

    @Query("SELECT g from GradeEntity g where g.recipeId =:recipeId")
    List<GradeEntity> findGradeWithRecipeId(@Param("recipeId") int recipeId);
}
