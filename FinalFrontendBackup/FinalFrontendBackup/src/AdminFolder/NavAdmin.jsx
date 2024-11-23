import React from "react";
import { Nav, Navbar, Button, InputGroup, Form, NavDropdown } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/Navbart.css';

function NavAdmin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
        navigate('/login');
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="/">
                <Image src={require('./logo.png')}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="R"
                />
            </Navbar.Brand>
            <Navbar.Brand href="/adminpage">SOLAR Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/adminpage">Home</Nav.Link>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>

                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/genre">Add Genre</NavDropdown.Item>
                        <NavDropdown.Item href="/addmovies">Add Movies</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Button variant="outline-danger" id="button-addon1" onClick={handleLogout}>
                    Logout
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavAdmin;





// import React from "react";
// import {Nav,Navbar, Button,InputGroup,Form,NavDropdown} from "react-bootstrap";
// import { Image } from 'react-bootstrap';
// import '../css/Navbart.css';



// function NavAdmin(){
//     return(
//         <Navbar expand="lg" className="bg-body-tertiary">
      
//       <Navbar.Brand href="/">

//             <Image src={require('./logo.png')}
//               width="50"
//               height="50"
//               className="d-inline-block align-top"
//               alt="R"
//             />
//           </Navbar.Brand>
//         <Navbar.Brand href="/adminpage">SOLAR Movies</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/adminpage">Home</Nav.Link>
          
//             {/* <Nav.Link  href="/aboutus">About Us</Nav.Link> */}

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
//             <NavDropdown title="Services" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
//               <NavDropdown.Item href="/genre">
//                 Add Genre
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/addmovies">Add Movies</NavDropdown.Item>
//               {/* <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item> */}
//             </NavDropdown>
//           </Nav>
         

//           <Button variant="outline-success" id="button-addon1" href="#">
//           Admin
//        </Button>
         
          
//         </Navbar.Collapse>
       
      
       
        
      
//     </Navbar>
//     );
    
// }
// export default NavAdmin;