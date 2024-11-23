package com.Site.back.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Site.back.Service.MovieService;
import com.Site.back.model.Movie;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    // Create a new movie
    @PostMapping("/add")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
    	//System.out.println(movie.genre);
        Movie savedMovie = movieService.saveMovie(movie);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }

    // Update an existing movie by ID
    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
        Optional<Movie> optionalMovie = movieService.getMovieById(id);

        if (optionalMovie.isPresent()) {
            Movie updatedMovie = movieService.updateMovie(id, movieDetails);
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a movie by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable Long id) {
        if (movieService.deleteMovie(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Fetch all movies
    @GetMapping("/")
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    // Fetch a movie by ID
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
        Optional<Movie> optionalMovie = movieService.getMovieById(id);
        return optionalMovie.map(movie -> new ResponseEntity<>(movie, HttpStatus.OK))
                            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Upload movie files (image and video)
    @PostMapping("/{id}/upload")
    public ResponseEntity<Movie> uploadMovieFiles(@PathVariable Long id,
                                                  @RequestParam("image") MultipartFile image,
                                                  @RequestParam("video") MultipartFile video) throws SQLException {
        try {
            Movie updatedMovie = movieService.uploadMovieFiles(id, image, video);
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    
    @GetMapping("/search")
    public ResponseEntity<List<Movie>> searchMoviesByName(@RequestParam String name) {
        List<Movie> movies = movieService.searchMoviesByName(name);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
}














//package com.Site.back.controller;
//
//import java.io.IOException;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.Optional;
//
//import javax.sql.rowset.serial.SerialException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.Site.back.Service.MovieService;
//import com.Site.back.model.Movie;
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/movies")
//
//public class MovieController {
//
//
//
//
//    @Autowired
//    private MovieService movieService;
//
//    // Create a new movie
//    @PostMapping("/add")
////    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
////        Movie savedMovie = movieService.saveMovie(movie);
////        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
////    }
//    public ResponseEntity<Movie> createMovie(@RequestParam("name") String name,
//            @RequestParam("genre") String genre,
//            @RequestParam("director_name") String directorName,
//            @RequestParam("releasingYear") int releasingYear,
//            @RequestParam("image") MultipartFile image,
//            @RequestParam("video") MultipartFile video) throws IOException, SerialException, SQLException {
//Movie movie = new Movie();
//movie.setName(name);
//movie.setName(genre);
//movie.setDirector_name(directorName);
//movie.setReleasingYear(releasingYear);
//
//Movie savedMovie = movieService.saveMovieWithFiles(movie, image, video);
//return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
//}
//    // Update an existing movie by ID
//    @PutMapping("/{id}")
//    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
//        Optional<Movie> optionalMovie = movieService.getMovieById(id);
//
//        if (optionalMovie.isPresent()) {
//            Movie updatedMovie = movieService.updateMovie(id, movieDetails);
//            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Delete a movie by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteMovie(@PathVariable Long id) {
//        if (movieService.deleteMovie(id)) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Fetch all movies
//    @GetMapping("/")
//    public ResponseEntity<List<Movie>> getAllMovies() {
//        List<Movie> movies = movieService.getAllMovies();
//        return new ResponseEntity<>(movies, HttpStatus.OK);
//    }
//
//    // Fetch a movie by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
//        Optional<Movie> optionalMovie = movieService.getMovieById(id);
//        return optionalMovie.map(movie -> new ResponseEntity<>(movie, HttpStatus.OK))
//                            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    // Upload movie files (image and video)
//    @PostMapping("/{id}/upload")
//    public ResponseEntity<Movie> uploadMovieFiles(@PathVariable Long id,
//                                                  @RequestParam("image") MultipartFile image,
//                                                  @RequestParam("video") MultipartFile video) throws SerialException, SQLException {
//        try {
//            Movie updatedMovie = movieService.uploadMovieFiles(id, image, video);
//            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
//        } catch (IOException e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    // Download movie image by ID
//    @GetMapping("/{id}/download/image")
//    public ResponseEntity<byte[]> downloadMovieImage(@PathVariable Long id) throws IOException {
//        byte[] imageBytes = null;
//		try {
//			imageBytes = movieService.getMovieImage(id);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//        if (imageBytes != null) {
//            return ResponseEntity.ok().body(imageBytes);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Download movie video by ID
//    @GetMapping("/{id}/download/video")
//    public ResponseEntity<byte[]> downloadMovieVideo(@PathVariable Long id) throws IOException {
//        byte[] videoBytes = movieService.getMovieVideo(id);
//        if (videoBytes != null) {
//            return ResponseEntity.ok().body(videoBytes);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//}
