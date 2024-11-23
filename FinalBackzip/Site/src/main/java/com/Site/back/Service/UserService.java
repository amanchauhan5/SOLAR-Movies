package com.Site.back.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.Site.back.Repository.UserRepository;
import com.Site.back.model.User;


@Service
public class UserService {
	private final UserRepository userRepository;
	
@Autowired
public   UserService(UserRepository userRepository) {
	this.userRepository= userRepository;
}

public User  saveUser(User user) {
	return userRepository.save(user);	
}
@GetMapping
public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = UserService.findAllUsers();
    return ResponseEntity.ok(users);
}

public boolean usernameExists(String username) {
    return userRepository.findByUsername(username) != null;
}

public User findUserById(Long id) {
	// TODO Auto-generated method stub
	return userRepository.findById(id).orElse(null);
}



public boolean authenticateUser(String username, String password) {
    User user = userRepository.findByUsername(username);
    if (user != null) {
        // Here you should ideally use password encoding to compare passwords securely
        return user.getPassword().equals(password);
    }
    return false;
}

public static List<User> findAllUsers() {
	// TODO Auto-generated method stub
	return null;
}

public void deleteUser(Long id) {
	// TODO Auto-generated method stub
	
}

public User updateUser(Long id, User userDetails) {
	// TODO Auto-generated method stub
	return null;
}


}



    
    