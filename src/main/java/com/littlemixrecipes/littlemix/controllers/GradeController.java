package com.littlemixrecipes.littlemix.controllers;

/*Created by jennifergisslow on 2018-02-04.*/

import com.littlemixrecipes.littlemix.entities.GradeEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.GradeRepository;
import com.littlemixrecipes.littlemix.services.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/grade")
public class GradeController {

    @Autowired
    private GradeRepository gradeRepository;
    @Autowired 
    RecipeRepository recipeRepository;

    @GetMapping("/getGrade")
    public double getFinalGradeOnRecipie(@RequestParam int recipeId){
        double finalGrade;
        double points = 0;
        List<GradeEntity> gradeListForSpecificRecipe = gradeRepository.findGradeWithRecipeId(recipeId);

        for (GradeEntity aGradeListForSpecificRecipe : gradeListForSpecificRecipe) {
            points += aGradeListForSpecificRecipe.getGradePoints();
        }
        finalGrade = points/gradeListForSpecificRecipe.size();

        return finalGrade;
    }

    @PostMapping("/createGrade")
    public ResponseEntity createAGrade(@RequestBody GradeEntity gradeObject) {
    	RecipeEntity recipe = recipeRepository.findOne(gradeObject.getRecipeId());
    	recipe.getGradeList().add(gradeObject);
    	recipeRepository.save(recipe);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/updateGrade")
    public ResponseEntity<GradeEntity> updateGrade(@RequestParam int gradeId, @RequestBody GradeEntity gradeObject){
        GradeEntity gradeToChange = gradeRepository.findOne(gradeId);
        if (gradeToChange == null){
            return new ResponseEntity<GradeEntity>(HttpStatus.NOT_FOUND);
        }
        gradeToChange.setGradePoints(gradeObject.getGradePoints());
        gradeToChange.setRecipeId(gradeObject.getRecipeId());

        GradeEntity updatedGrade = gradeRepository.save(gradeToChange);
        return new ResponseEntity<GradeEntity>(updatedGrade, HttpStatus.OK);
    }

    @DeleteMapping("/deleteGrade")
    public void deleteGradeById(@RequestParam int gradeId){
        gradeRepository.delete(gradeId);
    }
}