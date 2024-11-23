
import React, { useState } from "react";
import { Nav, Container, Navbar, Button, InputGroup, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Navbart.css';

function Navbart() {
    const [searchQuery, setSearchQuery] = useState('');
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
        navigate('/login');
    };

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            alert("Please enter a movie name to search.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/movies/search?name=${searchQuery}`);
            const movies = response.data;

            // Navigate to the results page with the movies data
            navigate('/search-results', { state: { movies } });
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">
                <Image
                    src={require('./logo.png')}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="R"
                />
            </Navbar.Brand>
            <Navbar.Brand href="/">SOLAR Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup>
                </Nav>
                {isLoggedIn ? (
                    <Button variant="outline-danger" id="button-addon1" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button variant="outline-success" id="button-addon1" href="/login">
                        Login
                    </Button>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbart;






// import React from "react";
// import { Nav, Container, Navbar, Button, InputGroup, Form } from "react-bootstrap";
// import { Image } from 'react-bootstrap';
// import '../css/Navbart.css';
// import { useNavigate } from "react-router-dom";

// function Navbart() {
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("isLoggedIn");
//         localStorage.removeItem("isAdmin");
//         navigate('/login');
//     };

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Navbar.Brand href="#home">
//                 <Image src={require('./logo.png')}
//                     width="50"
//                     height="50"
//                     className="d-inline-block align-top"
//                     alt="R"
//                 />
//             </Navbar.Brand>
//             <Navbar.Brand href="/">SOLAR Movies</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                     <Nav.Link href="/">Home</Nav.Link>
//                     <Nav.Link href="/aboutus">About Us</Nav.Link>

//                     <InputGroup className="mb-3">
//                         <Form.Control
//                             placeholder="Search"
//                             aria-label="Search"
//                             aria-describedby="basic-addon2"
//                         />
//                         <Button variant="outline-secondary" id="button-addon2">
//                             Search
//                         </Button>
//                     </InputGroup>
//                 </Nav>
//                 {/* <Button variant="outline-success" id="button-addon1" href="/login">
//                     Login
//                 </Button> */}
//                    {isLoggedIn ? (
//                     <Button variant="outline-danger" id="button-addon1" onClick={handleLogout}>
//                         Logout
//                     </Button>
//                 ) : (
//                     <Button variant="outline-success" id="button-addon1" href="/login">
//                         Login
//                     </Button>
//                 )}
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }

// export default Navbart;




// import React from "react";
// import {Nav,Container,Navbar, Button,InputGroup,Form} from "react-bootstrap";
// import { Image } from 'react-bootstrap';
// import '../css/Navbart.css';



// function Navbart(){
//     return(
//         <Navbar expand="lg" className="bg-body-tertiary">
     
//       <Navbar.Brand href="#home">

//             <Image src={require('./logo.png')}
//               width="50"
//               height="50"
//               className="d-inline-block align-top"
//               alt="R"
//             />
//           </Navbar.Brand>
//         <Navbar.Brand href="/">SOLAR Movies</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
          
//             <Nav.Link  href="/aboutus">About Us</Nav.Link>

//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Search"
//           aria-label="Search"
//           aria-describedby="basic-addon2"
//         />
//         <Button variant="outline-secondary" id="button-addon2">
//           Search
//         </Button>
//       </InputGroup>
            
//             {/* <Nav.Link id="login" href="/login">Login</Nav.Link> */}
//             {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
         

//           <Button variant="outline-success" id="button-addon1" href="/login">
//           Login
//        </Button>
//          {/* <Nav.Link variant="outline-success" id="button-addon1">
//           Button
//         </Nav.Link> */}
          
//         </Navbar.Collapse>
//         {/* <Button className="justify-rigth" >Login</Button> */}
      
       
        
      
//     </Navbar>
//     );
    
// }
// export default Navbart;