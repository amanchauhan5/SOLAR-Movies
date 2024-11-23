package com.Site.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Site.back.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    
}