package com.littlemixrecipes.littlemix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		
		user.setFirstName(userModel.getFirstName());
		user.setLastName(userModel.getLastName());
		user.setEmail(userModel.getEmail());
		user.setPassword(userModel.getPassword());
		user.setImgURL(userModel.getUrlImg());
		
		userRepository.save(user);
	}
	
	@GetMapping(path="/getUser")
	public UserEntity getUser(int userId){
		return userRepository.findOne(userId);
	}
	
	@PutMapping(path="/update")
	public ResponseEntity<UserEntity> updateUser(@RequestParam UserEntity userModel){
		int currentUserId = userModel.getUserId();
		
		UserEntity oldUser = userRepository.findOne(currentUserId);
		if(oldUser == null){
            return new ResponseEntity<UserEntity>(HttpStatus.NOT_FOUND);
		}
		oldUser = userModel;
		userRepository.save(oldUser);
		
		return new ResponseEntity<UserEntity>(oldUser, HttpStatus.OK);
	}
}
