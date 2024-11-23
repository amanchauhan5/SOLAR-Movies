import React from "react";
import Sliders from "../components/Sliders";
import MovieCards from "../components/MovieCards";
import '../css/Home.css';
//import NavAdmin from "./NavAdmin";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";


function AdminPage(){
//     const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("isAdmin");
//     navigate('/login');
//   };

    return(
        <>
        {/* <NavAdmin/> */}
        <MainNavbar></MainNavbar>
        {/* <button className="btn btn-danger " onClick={handleLogout}>
          Logout
        </button> */}
        <Sliders/>
        <MovieCards/>
        
        <Footer/>
        </>       
    );
}
export default AdminPage;