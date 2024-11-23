package com.Site.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Site.back.model.User;








public interface UserRepository extends JpaRepository<User, Long>{

	 public User save(User user);

	 User findByUsername(String username);
	
}
