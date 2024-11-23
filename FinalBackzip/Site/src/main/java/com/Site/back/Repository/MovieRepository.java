
package com.Site.back.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Site.back.model.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long>{
	 List<Movie> findByNameContainingIgnoreCase(String name);
}



//package com.Site.back.Repository;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import com.Site.back.model.Movie;
//
//public interface MovieRepository extends JpaRepository<Movie, Long> {
//    Optional<Movie> findById(Long id);
//    List<Movie> findAll();
//    
//}



//package com.Site.back.Repository;
//
//import java.io.File;
//import java.io.IOException;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.Optional;
//
//import javax.sql.rowset.serial.SerialException;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.Site.back.model.Movie;
//
//public interface MovieRepository extends JpaRepository<Movie, Long> {
//	Movie saveMovie(Movie movie);
//	 String uploadFile(String path, MultipartFile file);
//	    File downloadFile(String filename);
//		Optional<Movie> getMovieById(Long id);
//		Movie updateMovie(Long id, Movie movieDetails);
//		boolean deleteMovie(Long id);
//		List<Movie> getAllMovies();
//		Movie uploadMovieFiles(Long id, MultipartFile image, MultipartFile video) throws IOException, SerialException, SQLException;
//
//	    byte[] getMovieImage(Long id);
//
//	    byte[] getMovieVideo(Long id);
//		Optional<Movie> getMovieByIdOptional(Long id);
//}
