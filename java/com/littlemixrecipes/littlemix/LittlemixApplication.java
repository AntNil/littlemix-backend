package com.littlemixrecipes.littlemix;


import com.littlemixrecipes.littlemix.entities.CommentEntity;
import com.littlemixrecipes.littlemix.entities.GradeEntity;
import com.littlemixrecipes.littlemix.entities.IngredientsEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.entities.UserEntity;
import com.littlemixrecipes.littlemix.services.*;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LittlemixApplication {

	public static void main(String[] args) {
		SpringApplication.run(LittlemixApplication.class, args);
	}
}
