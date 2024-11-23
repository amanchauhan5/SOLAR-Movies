package com.Site.back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Site.back.Service.UserService;
import com.Site.back.model.Login;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	

	    @Autowired
	    private UserService userService;

	    // Existing endpoints ...

	    @PostMapping("/login")
	    public ResponseEntity<String> login(@RequestBody Login login) {
	        boolean isAuthenticated = userService.authenticateUser(login.getUsername(), login.getPassword());
	        if (isAuthenticated) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(401).body("Invalid credentials");
	        }
	    }
	}

