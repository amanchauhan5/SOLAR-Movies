package com.Site.back.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Site.back.Repository.GenreRepository;
import com.Site.back.model.Genre;

@Service
public class GenreService {
	@Autowired
    private GenreRepository genreRepository;

    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    public Optional<Genre> getGenreById(Long id) {
        return genreRepository.findById(id);
    }

    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    public void deleteGenre(Long id) {
        genreRepository.deleteById(id);
    }

	public Genre findById(Long genreId) {
		// TODO Auto-generated method stub
		 return genreRepository.findById(genreId).orElse(null);
	}

	
	}


