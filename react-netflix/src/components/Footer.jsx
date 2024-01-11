import Container from "react-bootstrap/esm/Container"
import {Row, Col, Nav, Button } from "react-bootstrap"

export default function Footer() {
    let footerLinks = ['Audio and Subtitles', 'Audio Description', 'Help Center', 'Gift Card', 'Media Center', 'Investor Relations', 'Jobs', 'Terms of Use', 'Privacy', 'Legal Notices', 'Cookie Preferencies', 'Corporate Information', 'Contact Us' ]
  return (
   <Container className="w-50">
    <Row className='my-3 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4'>
        {footerLinks.map((l,index) =>   <Col key={index} className="my-1" >
                                    <Nav.Link className="fs-6 footer-links">
                                    <a className="link-offset-2-hover link-underline-secondary link-underline-opacity-0 link-underline-opacity-75-hover" href="#about">{l}</a>
                                    </Nav.Link>
                                   
                                </Col>)}
    </Row>
    <Button variant="outline-light" className="rounded-0 footer-button">Service Code</Button>
    <p className="copyright my-3">&copy; 1997-2022 Netflix, Inc.</p>

   </Container>
  )
}
