package com.Site.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.Site.back.Service.UserService;
import com.Site.back.model.User;

@Controller
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
@Autowired
	 private UserService userService;


 @GetMapping("/{id}")
public ResponseEntity<User> getUserById(@PathVariable Long id) {
    User user = userService.findUserById(id);
    if (user == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
    
}
@PostMapping("/register")
public ResponseEntity<User> registerUser(@RequestBody User user) {
    User savedUser = userService.saveUser(user);
    return ResponseEntity.ok(savedUser);
}
 
// @PostMapping("/register")
// public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user) {
//     // Validate user input (e.g., check if username or email is already taken)
//     if (userService.usernameExists(user.getUsername())) {
//         Map<String, String> response = new HashMap<>();
//         response.put("message", "Username already exists");
//         return ResponseEntity.badRequest().body(response);
//     }
//
//     // Save user
//     User savedUser = userService.saveUser(user);
//     Map<String, String> response = new HashMap<>();
//     response.put("message", "Registration successful");
//     return ResponseEntity.ok(response);
// }

@PostMapping("/login")
public ResponseEntity<Map<String, String>> loginUser(@RequestBody Map<String, String> loginRequest) {
    String username = loginRequest.get("username");
    String password = loginRequest.get("password");
    
    boolean isAuthenticated = userService.authenticateUser(username, password);
    
    Map<String, String> response = new HashMap<>();
    if (isAuthenticated) {
        response.put("message", "Login successful");
        return ResponseEntity.ok(response);
    } else {
        response.put("message", "Invalid username or password");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
}

//json for above login is ====
//{
//    "username": "testuser",
//    "password": "password123"
//    
//}
//
//



@GetMapping("/success")
public ResponseEntity<Map<String, String>> registrationSuccess() {
    Map<String, String> response = new HashMap<>();
    response.put("message", "Registration successful");
    return ResponseEntity.ok(response);
}

@GetMapping
public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userService.findAllUsers();
    return ResponseEntity.ok(users);
}

@PutMapping("/{id}")
public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
    User updatedUser = userService.updateUser(id, userDetails);
    if (updatedUser == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(updatedUser);
}

@DeleteMapping("/{id}")
public ResponseEntity<Map<String, String>> deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
    Map<String, String> response = new HashMap<>();
    response.put("message", "User deleted successfully");
    return ResponseEntity.ok(response);
}

}

