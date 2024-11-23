import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import Navbart from "./Navbart";
import Footer from "./Footer";
import Abhay from "./Abhay.jpg";
import aman from "./aman.png";
import MainNavbar from "./MainNavbar";
import shreekant from"./Shreekant.jpg";
import nikita from "./Nikita.jpg";
import poonam from "./Poonam.jpg";
import '../css/AboutUs.css';


function AboutUs(){

    return(
        <>
        {/* <Navbart/> */}
        <MainNavbar/>
        <div>
            <h2 style={{textAlign:'center',padding:'20px'}}>About Us</h2>
            <p style={{padding:'120px',fontSize:'20px' }}>
            SOLARMOVIES is an innovative platform designed to empower parents in making informed decisions about the movies their children watch. Recognizing the impact of media on young minds, SOLARMOVIES curates a selection of movies that not only entertain but also contribute to the holistic development of children. The platform offers a diverse range of genres tailored to foster creativity, character development, and positive self-image, ensuring that children are exposed to content that enriches their lives and supports their growth.
            </p>
        </div>
        <Row>
            <Col sm="3">
           
             <Card className="about-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Abhay} style={{width:'auto'}}/>
      <Card.Body>
        <Card.Title>Abhay</Card.Title>
        <Card.Text>
        Architech & Engineer
        </Card.Text>
      </Card.Body>
      
    
    </Card>
   

    </Col >

    <Col sm="3">
    <Card className="about-card"  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={aman} />
      <Card.Body>
        <Card.Title>Aman</Card.Title>
        <Card.Text>
        Architech & Engineer.
        </Card.Text>
      </Card.Body>
     

    </Card>
    
    </Col>

    <Col sm="3">
    <Card className="about-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poonam} />
      <Card.Body>
        <Card.Title>Poonam</Card.Title>
        <Card.Text>
        Architech & Engineer
        </Card.Text>
      </Card.Body>
    
    

    </Card>
    </Col>
    </Row>
    <Row>
    
    <Col sm="3">
    <Card className="about-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nikita} />
      <Card.Body>
        <Card.Title>Nikita</Card.Title>
        <Card.Text>
         Architech & Engineer
        </Card.Text>
      </Card.Body>
    
    

    </Card>
    
    </Col>
    <Col sm="3" >
    <Card className="about-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shreekant} />
      <Card.Body>
        <Card.Title>Y ShreeKant</Card.Title>
        <Card.Text>
    Project Lead
        </Card.Text>
      </Card.Body>
    
    

    </Card>
    
    </Col>

    
        </Row>
        <Footer/>
        </>
    );
}

export default AboutUs;