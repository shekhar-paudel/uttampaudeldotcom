import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
          </Col>
          <p align="center">All images in this page are taken by myself. I reserve right to the content. If you would like to use it, reach out to me.</p>

        </Row>
      </Container>
    </footer>
  )
}
