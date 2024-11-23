import React from "react";
//import Genre from "./Genre";
import Sliders from "./Sliders";
import '../css/Home.css'
import MovieCards from "./MovieCards";
import Navbart from "./Navbart";
import Footer from "./Footer";




function Home(){

    return(
        <>
            <Navbart/>
            
            <Sliders/>
           
            <MovieCards/>
        
            <Footer/>
            
        </>    
    );
}
export default Home;