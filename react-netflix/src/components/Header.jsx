
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa"

function Header() {
  return (
    <Navbar expand="lg"   data-bs-theme="dark">
      <Container className='mx-2'>
        <Navbar.Brand href="#home"> 
        <img
              alt="logo"
              src= {logo}
             
              height="50"
              className="d-inline-block align-top"
            /> {/* caricare immagine correttamente */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='d-flex justify-content-between'>
            <div className='d-flex'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#TVShows">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#recAdded">Recently Added</Nav.Link>
              <Nav.Link href="#myList">My List</Nav.Link>
            </div>
            <div className='d-flex '>
              <Nav.Link  href="#search"><IoIosSearch /></Nav.Link>
              <Nav.Link  href="#kids">KIDS</Nav.Link>
              <Nav.Link href="#notification"><FaBell /></Nav.Link>
              <Nav.Link href="#user"><FaUser /></Nav.Link>
            </div>
          </Nav>
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;