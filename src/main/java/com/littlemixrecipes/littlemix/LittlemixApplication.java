package com.littlemixrecipes.littlemix;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.RecipeRepository;

@SpringBootApplication
public class LittlemixApplication {
	
	private static final Logger log = LoggerFactory.getLogger(LittlemixApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(LittlemixApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(RecipeRepository repository) {
		return (args) -> {

			log.debug("Starting demo");
			RecipeEntity recipe = new RecipeEntity();
			recipe.setRecipeTitle("Gurkpizza");
			recipe.setCategory("Vegetariskt");
			recipe.setRecipeText("Använd gurka som pizzabotten. Gurka som topping. Och pressad gurka som sås");
			recipe.setUserName("Anton");

			repository.save(recipe);
			log.debug("Saved {} to mySQL", recipe);


		};
	}

}
