package com.littlemixrecipes.littlemix.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class UserEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int userId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String imgURL;
	
	@OneToMany( targetEntity = RecipeEntity.class, orphanRemoval = true, cascade = {CascadeType.REMOVE, CascadeType.ALL})
	private List<RecipeEntity> recipeList;

	@OneToMany(targetEntity = RecipeEntity.class, orphanRemoval = true, cascade = {CascadeType.REMOVE, CascadeType.ALL})
	private List<RecipeEntity> favoriteRecipeList;
	
	public UserEntity(){ }

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	public List<RecipeEntity> getRecipeList() {
		return recipeList;
	}

	public void setRecipeList(List<RecipeEntity> recipeList) {
		this.recipeList = recipeList;
	}

	public List<RecipeEntity> getFavoriteRecipeList() {
		return favoriteRecipeList;
	}

	public void setFavoriteRecipeList(List<RecipeEntity> favoriteRecipeList) {
		this.favoriteRecipeList = favoriteRecipeList;
	}
}
