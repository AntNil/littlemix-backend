package com.littlemixrecipes.littlemix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.littlemixrecipes.littlemix.entities.UserEntity;
import com.littlemixrecipes.littlemix.services.UserRepository;
import com.littlemixrecipes.littlemix.webmodels.User;

@Controller
@RequestMapping(path="/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping(path="/create")
	public void createUser(@RequestParam User userModel){
		UserEntity user = new UserEntity();
		CreateEntity create = new CreateEntity();
		
		user.setFirstName(userModel.getFirstName());
		user.setLastName(userModel.getLastName());
		user.setEmail(userModel.getEmail());
		user.setPassword(userModel.getPassword());
		user.setImgURL(userModel.getUrlImg());
		
		create.createUser(userRepository, user);
	}
	
	@GetMapping(path="/getUser")
	public UserEntity getUser(int userId){
		ReadEntity read = new ReadEntity();
		return read.readUser(userRepository, userId);
	}
}
