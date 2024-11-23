package com.Site.back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Site.back.model.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
