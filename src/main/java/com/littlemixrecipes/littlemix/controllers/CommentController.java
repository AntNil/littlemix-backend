package com.littlemixrecipes.littlemix.controllers;

import com.littlemixrecipes.littlemix.entities.CommentEntity;
import com.littlemixrecipes.littlemix.entities.RecipeEntity;
import com.littlemixrecipes.littlemix.services.CommentRepository;
import com.littlemixrecipes.littlemix.services.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*Created by jennifergisslow on 2018-02-04.*/

@RestController
@CrossOrigin
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired RecipeRepository recipeRepository;

    @Transactional(readOnly = true)
    @GetMapping("/getComments")
    public List<CommentEntity> getAllCommentsForARecipeById(@RequestParam int recipeId){
        return (List<CommentEntity>) commentRepository.findByRecipeId(recipeId);
    }

    @PostMapping("/createComment")
    public ResponseEntity createAComment(@RequestBody CommentEntity commentObject){
    	RecipeEntity recipe = recipeRepository.findOne(commentObject.getRecipeId());
    	recipe.getCommentList().add(commentObject);
    	recipeRepository.save(recipe);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/updateComment")
    public ResponseEntity<CommentEntity> updateComment(@RequestParam int commentId, @RequestBody CommentEntity commentObject){
        CommentEntity commentToChange = commentRepository.findOne(commentId);
        if (commentToChange == null){
            return new ResponseEntity<CommentEntity>(HttpStatus.NOT_FOUND);
        }
        commentToChange.setCommentText(commentObject.getCommentText());
        commentToChange.setCommentDate(commentObject.getCommentDate());
        commentToChange.setUserName(commentObject.getUserName());
        commentToChange.setRecipeId(commentObject.getRecipeId());

        CommentEntity updatedComment = commentRepository.save(commentToChange);
        return new ResponseEntity<CommentEntity>(updatedComment, HttpStatus.OK);
    }

    @DeleteMapping("deleteComment")
    public void deleteCommentById(@RequestParam int commentId){
        commentRepository.delete(commentId);
    }

}