package com.littlemixrecipes.littlemix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.littlemixrecipes.littlemix.entities.UserEntity;
import com.littlemixrecipes.littlemix.services.UserRepository;


@Controller
@CrossOrigin
@RequestMapping(path="/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@PostMapping(path="/create")
	public ResponseEntity createUser(@RequestBody UserEntity userModel) {
		userRepository.save(userModel);
		return new ResponseEntity(HttpStatus.OK);
	}

	@GetMapping(path = ("/checkLoginDetailsForUser"))
	public ResponseEntity<UserEntity> checkLoginDetailsForUser(@RequestParam String userEmail, @RequestParam String userPassword){
		UserEntity userToFront = userRepository.findUserByEmail(userEmail);

		if (userToFront.getPassword().equals(userPassword)){
			userToFront.setPassword(null);
			return new ResponseEntity<UserEntity>(userToFront, HttpStatus.OK);
		}
		else{
			return new ResponseEntity<UserEntity>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(path="/getUser")
	public ResponseEntity<UserEntity> getUser(int userId){
		UserEntity user = userRepository.findOne(userId);
		if(user == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UserEntity>(user, HttpStatus.OK);
	}
	
	@PutMapping(path="/update")
	public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity userModel){
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
