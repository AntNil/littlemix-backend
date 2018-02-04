package com.littlemixrecipes.littlemix.controllers;

/*Created by jennifergisslow on 2018-02-04.*/

import com.littlemixrecipes.littlemix.entities.GradeEntity;
import com.littlemixrecipes.littlemix.services.repositories.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/grade")
public class GradeController {

    private final GradeRepository gradeRepository;

    @Autowired
    public GradeController(GradeRepository gradeRepository){
        this.gradeRepository = gradeRepository;
    }

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
    public GradeEntity createAGrade(@RequestBody GradeEntity gradeObject){
        return gradeRepository.save(gradeObject);
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
