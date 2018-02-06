package com.littlemixrecipes.littlemix.services;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.littlemixrecipes.littlemix.entities.UserEntity;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository extends CrudRepository<UserEntity, Integer> {

    @Modifying
    @Query(value = "insert into user_entity_favorite_recipe_list (user_entity_user_id, favorite_recipe_list_recipe_id) select ue.user_id, re.recipe_id from user_entity ue, recipe_entity re where re.recipe_id =:recipeId", nativeQuery = true)
    @Transactional
    void addToFavorite(@Param("recipeId") int recipeId);
}
