package com.Site.back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public  Long id;

    public String name;
    public Integer releasingYear;
    public String DirectorName;
    public String imagePath;
    public String videoPath;
    public String genre;

    public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	// Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getReleasingYear() {
        return releasingYear;
    }

    public void setReleasingYear(Integer releasingYear) {
        this.releasingYear = releasingYear;
    }

    

    
	public String getDirectorName() {
		return DirectorName;
	}

	public void setDirectorName(String directorName) {
		DirectorName = directorName;
	}

	public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getVideoPath() {
        return videoPath;
    }

    public void setVideoPath(String videoPath) {
        this.videoPath = videoPath;
    }
}














//package com.Site.back.model;
//
//import java.sql.Blob;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
////import javax.persistence.Lob;
//
//
//@Entity
//public class Movie {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    public  Long id;
//
//    public String name;
//    public Integer releasingYear;
//    public String director_name;
//// public Blob imagePath;
////    public Blob videoPath;
//
//   // @Lob
//    private byte[] image; // Storing image as BLOB
//
//   // @Lob
//    private byte[] video; // Storing video as BLOB
//    // Getters and setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public Integer getReleasingYear() {
//        return releasingYear;
//    }
//
//    public void setReleasingYear(Integer releasingYear) {
//        this.releasingYear = releasingYear;
//    }
//
//   
//
//    public String getDirector_name() {
//		return director_name;
//	}
//
//	public void setDirector_name(String director_name) {
//		this.director_name = director_name;
//	}
//
//	public byte[] getImage() {
//		return image;
//	}
//
//	public void setImage(byte[] image) {
//		this.image = image;
//	}
//
//	public byte[] getVideo() {
//		return video;
//	}
//
//	public void setVideo(byte[] video) {
//		this.video = video;
//	}
//
////	public Blob getImagePath() {
////        return imagePath;
////    }
////
////    public void setImagePath(Blob imagePath) {
////        this.imagePath = imagePath;
////    }
////
////    public Blob getVideoPath() {
////        return videoPath;
////    }
////
////    public void setVideoPath(Blob videoPath) {
////        this.videoPath = videoPath;
////    }
//	
//}
