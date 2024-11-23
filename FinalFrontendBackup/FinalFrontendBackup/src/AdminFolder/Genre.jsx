import React ,{useState,useEffect}from "react";
import axios from "axios";
import Footer from "../components/Footer";
import '../AdminFolder/AdminCss/Genre.css';
import NavAdmin from "./NavAdmin";
import GenreCrud from "./GenreCrud";
import './AdminCss/Crud.css';
import MainNavbar from "../components/MainNavbar";


function Genre() {
  const [newGenre, setNewGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get("http://localhost:8080/genres");
      setGenres(response.data);
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  };

  
  const handleAddGenre = async () => {
    if (newGenre.trim() === "") return;
  
    try {
      const response = await axios.post("http://localhost:8080/genres", { name: newGenre });
      setGenres([...genres, response.data]);
      setNewGenre("");
    } catch (error) {
      console.error("Failed to add genre:", error);
    }
  };
  
  const handleShowAllGenres = () => {
    setShowGenres(true);
  };

  return (
    <>
      {/* <NavAdmin /> */}
      <MainNavbar/>
      <div className="GenreInput">
        <input
          type="text"
          placeholder="Add Genre"
          id="genrebox"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <input
          id="genrebtn"
          type="button"
          value="Add"
          onClick={handleAddGenre}
        />
        <input
          id="genrebtn"
          type="button"
          value="All"
          onClick={handleShowAllGenres}
        />
      </div>

      {showGenres && (
        <GenreCrud genres={genres} setGenres={setGenres} />
      )}
      
      <Footer />
    </>
  );
}



export default Genre;