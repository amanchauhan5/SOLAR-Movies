import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import '../css/slider.css'; 
import blue from "./blue.jpg";
import pands from "./panda.jpg";
import croods from "./croods.jpg";
import toystory from "./toy-story-3.png";

function Sliders() {
  return (
    <Carousel>  
      <Carousel.Item interval={1000}>
        <Image src={require('./A1.jpg')}/>
        <Carousel.Caption>
          <h3>Nemo</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={blue}/>
        <Carousel.Caption>
          <h3>Nemo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <Image src={croods}/>
        <Carousel.Caption>
          <h3>Nemo</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <Image src={toystory}/>
        <Carousel.Caption>
          <h3>Nemo</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={700}>
        <Image src={pands}/>
        <Carousel.Caption>
          <h3>Nemo</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;
