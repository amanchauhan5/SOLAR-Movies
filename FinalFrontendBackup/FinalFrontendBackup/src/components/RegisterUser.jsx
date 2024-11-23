 import React, {useState}from "react";
import { Row,Col,Button,Alert} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import '../css/Loginpage.css';
import Footer from "./Footer";
import Navbart from "./Navbart";
import MainNavbar from "./MainNavbar";


function RegisterUser(){
 // State for form data
 const [formData, setFormData] = useState({
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: ''
});

// State for alerts
const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });
const [loading, setLoading] = useState(false);

// Handle input change
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  
  if (formData.password !== formData.confirmPassword) {
    setAlertMessage({ type: 'danger', message: "Passwords do not match!" });
    return;
  }

  
  const userData = {
    name: formData.name,
    username: formData.username,
    email: formData.email,
    password: formData.password,
    role: formData.role
  };

  try {
    setLoading(true);
    setAlertMessage({ type: '', message: '' });

    
    const response = await axios.post('http://localhost:8080/users/register', userData);

    if (response.status === 200) {
      setAlertMessage({ type: 'success', message: "Registration successful!" });
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
      });
    }
  } catch (error) {
    setAlertMessage({ type: 'danger', message: "Registration failed. Please try again." });
  } finally {
    setLoading(false);
  }
};
 

    return(
      <>
      {/* <Navbart /> */}
      <MainNavbar/>
      <div className="d-flex justify-content-center align-items-center">
        <Form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          {alertMessage.message && (
            <Alert variant={alertMessage.type}>{alertMessage.message}</Alert>
          )}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Name</Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Username</Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Email</Form.Label>
            <Col sm="5">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Password</Form.Label>
            <Col sm="5">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Confirm Password</Form.Label>
            <Col sm="5">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5">Role</Form.Label>
            <Col sm="5">
              <Form.Select
                id="selectRole"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Parent">Parent</option>
                
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 5, offset: 5 }}>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Footer />
      
      </>
          );
        }
        export default RegisterUser;



        
  //     <>
  //     <Navbart/>
  //     <div className="d-flex justify-content-center align-items-center ">
  //     <Form>
  //       <h1>Sign Up</h1>
  //     <Form.Group as={Row} className="mb-3">
  //       <Form.Label column sm="5">
  //       Name
  //       </Form.Label>
  //       <Col sm="5">
  //       <Form.Control type="text" placeholder="Name" />
  //       </Col>
  //     </Form.Group>
  //     <Form.Group as={Row} className="mb-3">
  //       <Form.Label column sm="5">
  //       UserName
  //       </Form.Label>
  //       <Col sm="5">
  //       <Form.Control type="text" placeholder="UserName" />
  //       </Col>
  //     </Form.Group>
  //     <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
  //       <Form.Label column sm="5">
  //       Email
  //       </Form.Label>
  //       <Col sm="5">
  //       <Form.Control type="email" placeholder="name@example.com" />
  //       </Col>
  //     </Form.Group>
  //     <Form.Group as={Row} className="mb-3">
  //       <Form.Label column sm="5">
  //       Password
  //       </Form.Label>
  //       <Col sm="5" style={{ position: 'relative' }}>
  //       {/* <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Enter Password"/> */}
  //       <Form.Control type="Password"  placeholder="Enter Password"/>
        
        
  //       {/* <Button onClick={togglePass}>
  //           {showPassword ? <Image src={require('./Hide.png')}/> : <Image src={require('./Show.png')}/>}
  //         </Button> */}
  //       </Col> 
  //     </Form.Group>
  //     <Form.Group as={Row} className="mb-3" >
  //       <Form.Label column sm="5">
  //       Confirm Password
  //       </Form.Label>
  //       <Col sm="5">
  //       <Form.Control type="password" placeholder="Confirm Password"/>
        
  //       </Col>
  //     </Form.Group>
      
  //     <Form.Group as={Row} className="mb-3" >
  //       <Form.Label column sm="5">
        
  //       </Form.Label>
  //     <Col sm="5">
  //     <Form.Select  id="select" >
  //       <option>select</option>
  //       <option>Parent</option>
  //       </Form.Select>
  //       </Col>
  //       </Form.Group>
      
      
      
  //     <br />
  //     <Form.Group as={Row} className="mb-3" >
  //       <Form.Label column sm="5">
        
  //       </Form.Label>

  //     <input class='btn' type="submit" value="Sign Up"></input>
  //     </Form.Group>
  //     </Form>
  //     </div>
  //  <Footer/>   

