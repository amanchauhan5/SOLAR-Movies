
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Footer from './components/Footer';
// import Navbart from './components/Navbart';
import Loginpage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
import AboutUs from './components/AboutUs';
import AdminPage from './AdminFolder/AdminPage';
import Genre from './AdminFolder/Genre';
import AddMovies from './AdminFolder/AddMovies';
import MainNavbar from './components/MainNavbar';
import SearchResults from './components/SearchResults';



function App() {
  return (
    <>
   <BrowserRouter>
   {/* <MainNavbar/> */}
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/register' element={<RegisterUser/>}/>
    <Route path='/aboutus' element={<AboutUs/>}></Route>
    <Route path='/adminpage' element={<AdminPage/>}></Route> 
    <Route path='/genre' element={<Genre/>}></Route>
    <Route path='/addmovies' element={<AddMovies/>}></Route>
    <Route path="/search-results" element={<SearchResults />} />
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
