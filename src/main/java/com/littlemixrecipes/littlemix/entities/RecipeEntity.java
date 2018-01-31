package com.littlemixrecipes.littlemix.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class RecipeEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int recipeId;
	private String recipeTitle;
	private String category;
	private String userName;
	
	@OneToMany( targetEntity = CommentEntity.class, orphanRemoval = true)
	private List<CommentEntity> commentList;
	
	@OneToMany( targetEntity = IngredientsEntity.class , orphanRemoval = true)
	private List<IngredientsEntity> ingredientsList;
	
	@OneToMany( targetEntity = GradeEntity.class, orphanRemoval = true)
	private List<GradeEntity> gradeList;
	
	public RecipeEntity(){ }

	public int getRecipeId() {
		return recipeId;
	}
	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}
	public String getRecipeTitle() {
		return recipeTitle;
	}
	public void setRecipeTitle(String recipeTitle) {
		this.recipeTitle = recipeTitle;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<CommentEntity> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<CommentEntity> commentList) {
		this.commentList = commentList;
	}

	public List<GradeEntity> getGradeList() {
		return gradeList;
	}

	public void setGradeList(List<GradeEntity> gradeList) {
		this.gradeList = gradeList;
	}	
	
	public List<IngredientsEntity> getIngredientsList() {
		return ingredientsList;
	}

	public void setIngredientsList(List<IngredientsEntity> ingredientsList) {
		this.ingredientsList = ingredientsList;
	}
	
//	public int getAverageGrade() {
//		int points = 0;
//		int i;
//		for (i = 0 ; i < this.gradeList.size(); i++){
//			points = points + gradeList.get(i).getGradePoints();
//		}
//		return points/i;
//	}
}
