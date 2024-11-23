import React from "react";
import { Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; 
import '../css/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <Nav className="justify-content-center mt-4 mb-4">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Solar Movies</Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="https://www.facebook.com" target="_blank">
            <FaFacebook size={30} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.instagram.com" target="_blank">
            <FaInstagram size={30} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.youtube.com" target="_blank">
            <FaYoutube size={30} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
}

export default Footer;







// import React from "react";
// import { Nav } from "react-bootstrap";
// import '../css/Footer.css'; 

// function Footer() {
//   return (
//     <footer className="footer">
      
//       <p className="text-center mt-4 mb-4">Or right-aligned</p>
//       <Nav className="justify-content-end" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </footer>
//   );
// }

// export default Footer;
