
package com.Site.back.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Site.back.Repository.MovieRepository;
import com.Site.back.model.Movie;



@Service
public class MovieService {

   @Autowired
    private MovieRepository movieRepository;

   // Save a new movie
  public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }
  public List<Movie> searchMoviesByName(String name) {
      return movieRepository.findByNameContainingIgnoreCase(name);
  }

   // Update an existing movie
   public Movie updateMovie(Long id, Movie movieDetails) {
       Movie existingMovie = movieRepository.findById(id).orElseThrow(() -> new RuntimeException("Movie not found"));
       existingMovie.setDirectorName(movieDetails.getDirectorName());
     
      
       return movieRepository.save(existingMovie);
   }

   // Delete a movie by ID
   public boolean deleteMovie(Long id) {
       Optional<Movie> movie = movieRepository.findById(id);
       if (movie.isPresent()) {
           movieRepository.delete(movie.get());
           return true;
       } else {
            return false;
       }
   }

    // Get all movies
   public List<Movie> getAllMovies() {
        return movieRepository.findAll();
   }

   // Get a movie by ID
   public Optional<Movie> getMovieById(Long id) {
       return movieRepository.findById(id);
   }

   // Upload movie files (image and video)
    public Movie uploadMovieFiles(Long id, MultipartFile image, MultipartFile video) throws IOException {
       Movie movie = movieRepository.findById(id).orElseThrow(() -> new RuntimeException("Movie not found"));

        // Save image and video paths
      movie.setImagePath(image.getOriginalFilename());
      movie.setVideoPath(video.getOriginalFilename());
       // Save movie with new image and video paths
       return movieRepository.save(movie);
   }

  // Get movie image by ID
   public byte[] getMovieImage(Long id) {
        Movie movie = movieRepository.findById(id).orElseThrow(() -> new RuntimeException("Movie not found"));
       
       return new byte[0]; 
    }

   // Get movie video by ID
   public byte[] getMovieVideo(Long id) {
       Movie movie = movieRepository.findById(id).orElseThrow(() -> new RuntimeException("Movie not found"));
       
        return new byte[0];  
   }
}
























//package com.Site.back.Service;
////
////import java.io.File;
////import java.io.IOException;
////import java.sql.Blob;
////import java.sql.SQLException;
////import java.util.List;
////import java.util.Optional;
////
////import javax.sql.rowset.serial.SerialBlob;
////import javax.sql.rowset.serial.SerialException;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////import org.springframework.web.multipart.MultipartFile;
////
////import com.Site.back.Repository.MovieRepository;
////import com.Site.back.model.Movie;
////
////@Service
////public class MovieService {
////	@Autowired
////	private MovieRepository movieRepository1;
////    
////
////	    public Movie saveMovie(Movie movie) {
////	        return movieRepository1.save(movie);
////	    }
////
////	    public Optional<Movie> getMovieById(Long id) {
////	        return movieRepository1.findById(id);
////	    }
////
////	    public List<Movie> getAllMovies() {
////	        return movieRepository1.findAll();
////	    }
////
////	    
////	    public Movie updateMovie(Long id, Movie movieDetails) {
////	        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////	        if (optionalMovie.isPresent()) {
////	            Movie movie = optionalMovie.get();
////	            movie.setName(movieDetails.getName());
////	            movie.setReleasingYear(movieDetails.getReleasingYear());
////	            movie.setDirector_name(movieDetails.getDirector_name());
////	            movie.setImagePath(movieDetails.getImagePath());
////	            movie.setVideoPath(movieDetails.getVideoPath());
////	            return movieRepository1.save(movie);
////	        } else {
////	            return null;
////	        }
////	    }
////
////	    
////	    public boolean deleteMovie(Long id) {
////	        if (movieRepository1.existsById(id)) {
////	            movieRepository1.deleteById(id);
////	            return true;
////	        } else {
////	            return false;
////	        }
////	    }
////
////	    
////	    public Movie uploadMovieFiles(Long id, MultipartFile image, MultipartFile video) throws IOException, SerialException, SQLException {
////	        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////	        if (optionalMovie.isPresent()) {
////	            Movie movie = optionalMovie.get();
////
////	            // Save image as Blob
////	            if (image != null && !image.isEmpty()) {
////	                Blob imageBlob = new SerialBlob(image.getBytes());
////	                movie.setImagePath(imageBlob);
////	            }
////
////	            // Save video as Blob
////	            if (video != null && !video.isEmpty()) {
////	                Blob videoBlob = new SerialBlob(video.getBytes());
////	                movie.setVideoPath(videoBlob);
////	            }
////
////	            return movieRepository1.save(movie);
////	        } else {
////	            return null;
////	        }
////	    }
////
////	    
////	    public byte[] getMovieImage(Long id) {
////	        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////	        if (optionalMovie.isPresent()) {
////	            Movie movie = optionalMovie.get();
////	            try {
////	                return movie.getImagePath().getBytes(1, (int) movie.getImagePath().length());
////	            } catch (SQLException e) {
////	                e.printStackTrace();
////	                return null;
////	            }
////	        } else {
////	            return null;
////	        }
////	    }
////
////	   
////	    public byte[] getMovieVideo(Long id) {
////	        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////	        if (optionalMovie.isPresent()) {
////	            Movie movie = optionalMovie.get();
////	            try {
////	                return movie.getVideoPath().getBytes(1, (int) movie.getVideoPath().length());
////	            } catch (SQLException e) {
////	                e.printStackTrace();
////	                return null;
////	            }
////	        } else {
////	            return null;
////	        }
////	    }
////
////	    
////	    public String uploadFile(String path, MultipartFile file) {
////	        // This method can be used if needed
////	        return null;
////	    }
////
////	    
////	    public File downloadFile(String filename) {
////	        // This method can be used if needed
////	        return null;
////	    }
////
////	    
////	    public Optional<Movie> getMovieByIdOptional(Long id) {
////	        return movieRepository1.findById(id);
////	    }
////	
////	 
////		public  Movie saveMovieWithFiles(Movie movie, MultipartFile imageFile, MultipartFile videoFile) throws SerialException, SQLException, IOException {
////			 movie.setImagePath(new SerialBlob(imageFile.getBytes()));
////		        movie.setVideoPath(new SerialBlob(videoFile.getBytes()));
////		        return movieRepository1.save(movie);
////		}
////}
//
//
//import java.io.File;
//import java.io.IOException;
//import java.sql.Blob;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.Optional;
//
//import javax.sql.rowset.serial.SerialBlob;
//import javax.sql.rowset.serial.SerialException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.Site.back.Repository.MovieRepository;
//import com.Site.back.model.Movie;
//
//
//public interface MovieService {
//	
//	
//	    Movie saveMovie(Movie movie);
//	    String uploadFile(String path, MultipartFile file) throws IOException;
//	    File downloadFile(String filename) throws IOException;
//	    Movie updateMovie(Long id, Movie movieDetails);
//	    boolean deleteMovie(Long id);
//	    List<Movie> getAllMovies();
//	    Movie uploadMovieFiles(Long id, MultipartFile image, MultipartFile video) throws IOException, SQLException;
//	    byte[] getMovieImage(Long id) throws IOException;
//	    byte[] getMovieVideo(Long id) throws IOException;
//		Movie saveMovieWithFiles(Movie movie, MultipartFile imageFile, MultipartFile videoFile);
//		Optional<Movie> getMovieById(Long id);
//	}
//
//    
//    
////    private MovieRepository movieRepository1;
////
////    public Movie saveMovie(Movie movie) {
////        return movieRepository1.save(movie);
////    }
////
////    public Optional<Movie> getMovieById(Long id) {
////        return movieRepository1.findById(id);
////    }
////
////    public List<Movie> getAllMovies() {
////        return movieRepository1.findAll();
////    }
////
////    public Movie updateMovie(Long id, Movie movieDetails) {
////        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////        if (optionalMovie.isPresent()) {
////            Movie movie = optionalMovie.get();
////            movie.setName(movieDetails.getName());
////            movie.setReleasingYear(movieDetails.getReleasingYear());
////            movie.setDirector_name(movieDetails.getDirector_name());
////            movie.setImagePath(movieDetails.getImagePath());
////            movie.setVideoPath(movieDetails.getVideoPath());
////            return movieRepository1.save(movie);
////        } else {
////            return null;
////        }
////    }
////
////    public boolean deleteMovie(Long id) {
////        if (movieRepository1.existsById(id)) {
////            movieRepository1.deleteById(id);
////            return true;
////        } else {
////            return false;
////        }
////    }
////
////    public Movie uploadMovieFiles(Long id, MultipartFile image, MultipartFile video) throws IOException, SerialException, SQLException {
////        Optional<Movie> optionalMovie = movieRepository1.findById(id);
////
////        if (optionalMovie.isPresent()) {
////            Movie movie = optionalMovie.get();
////
////            // Save image as Blob
////            if (image != null && !image.isEmpty()) {
////                Blob imageBlob = new SerialBlob(image.getBytes());
////                movie.setImagePath(imageBlob);
////            }
////
////            // Save video as Blob
////            if (video != null && !video.isEmpty()) {
////                Blob videoBlob = new SerialBlob(video.getBytes());
////                movie.setVideoPath(videoBlob);
////            }
////
////            return movieRepository1.save(movie);
////        } else {
////            return null;
////        }
////    }
//
//	
//	
//
