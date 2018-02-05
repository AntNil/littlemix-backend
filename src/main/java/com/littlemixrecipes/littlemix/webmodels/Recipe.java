package com.littlemixrecipes.littlemix.webmodels;

import java.util.List;

import com.littlemixrecipes.littlemix.entities.IngredientsEntity;

public class Recipe {
	private String title;
	private String category;
	private String description;
	private List<IngredientsEntity> ingredientsList;
	private int userId;
	private String instruction;
	private String imgURL;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<IngredientsEntity> getIngredientsList() {
		return ingredientsList;
	}
	public void setIngredientsList(List<IngredientsEntity> ingredientsList) {
		this.ingredientsList = ingredientsList;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getInstruction() {
		return instruction;
	}
	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}
	public String getImgURL() {
		return imgURL;
	}
	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
}
