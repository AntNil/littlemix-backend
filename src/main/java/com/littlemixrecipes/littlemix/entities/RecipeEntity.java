package com.littlemixrecipes.littlemix.entities;


import java.util.List;

import javax.persistence.*;

@Entity
public class RecipeEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int recipeId;
	private String recipeTitle;
	private String category;
	@Column(columnDefinition = "TEXT")
	private String recipeText;
	@Column(columnDefinition = "TEXT")
	private String description;
	private String imgURL;
	private int userId;

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

	public String getRecipeText() {
		return recipeText;
	}

	public void setRecipeText(String recipeText) {
		this.recipeText = recipeText;
	}
	
	public int getUserId(){
		return this.userId;
	}
	
	public void setUserId(int userId){
		this.userId = userId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
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
}
