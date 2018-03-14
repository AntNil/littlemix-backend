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

    @Query("Select ue From UserEntity ue where ue.email=:email")
    UserEntity findUserByEmail(@Param("email") String email);

}
