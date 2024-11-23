
import React, { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";
import '../css/Loginpage.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Loginpage() {
  const navigate = useNavigate();

  // State to track input and login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Hardcoded admin credentials
  const adminCredentials = {
    username: "admin",
    password: "admin123"
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(loggedInStatus);
    setIsAdmin(adminStatus);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Set admin login status
      localStorage.setItem("isAdmin", true);
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      setIsAdmin(true);
      navigate('/adminpage');
    } else if (username && password) {
      // Set normal user login status
      localStorage.setItem("isAdmin", false);
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      setIsAdmin(false);
      navigate('/');
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <MainNavbar />
      <div className="d-flex justify-content-center align-items-center" style={{ height: '720px' }}>
        <Image src={require('./logo.png')} style={{ height: '500px' }} />
        {isLoggedIn ? (
          <div>
            <p>You are logged in as {isAdmin ? "Admin" : "User"}</p>
            {isAdmin && (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        ) : (
          <Form onSubmit={handleLogin}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column sm="3">User Name</Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="3">Password</Form.Label>
              <Col sm="5">
                <InputGroup>
                <Form.Control
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                {/* <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /> */}
                   <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>

            <input className="btn" type="submit" value="Login" />
            <input
              className="btn"
              type="submit"
              value="Admin Login"
              onClick={handleLogin}
            />
            <input
              className="btn btn-link"
              type="button"
              value="Sign Up"
              onClick={() => {
                navigate('/register');
              }}
            />
          </Form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Loginpage;





//   // State to track input and login status
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Hardcoded admin credentials
//   const adminCredentials = {
//     username: "admin",
//     password: "admin123"
//   };

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loggedInStatus === "true");
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === adminCredentials.username && password === adminCredentials.password) {
//       // Set admin login status
//       localStorage.setItem("isAdmin", true);
//       localStorage.setItem("isLoggedIn", true);
//       setIsLoggedIn(true);
//       navigate('/adminpage');
//     } else if (username && password) {
//       // Set normal user login status
//       localStorage.setItem("isAdmin", false);
//       localStorage.setItem("isLoggedIn", true);
//       setIsLoggedIn(true);
//       navigate('/');
//     } else {
//       setError("Invalid credentials. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("isAdmin");
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <>
//       <MainNavbar/>
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '720px' }}>
//         <Image src={require('./logo.png')} style={{ height: '500px' }} />
//         {isLoggedIn ? (
//           <div>
//             <p>You are logged in as {localStorage.getItem("isAdmin") === "true" ? "Admin" : "User"}</p>
//             <button className="btn btn-danger" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Form onSubmit={handleLogin}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label column sm="3">User Name</Form.Label>
//               <Col sm="5">
//                 <Form.Control
//                   type="text"
//                   placeholder="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//               <Form.Label column sm="3">Password</Form.Label>
//               <Col sm="5">
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Col>
//             </Form.Group>

//             <input className="btn" type="submit" value="Login" />
//             <input
//               className="btn"
//               type="submit"
//               value="Admin Login"
//               onClick={handleLogin}
//             />
//             <input
//               className="btn btn-link"
//               type="button"
//               value="Sign Up"
//               onClick={() => {
//                 navigate('/register');
//               }}
//             />
//           </Form>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Loginpage;

