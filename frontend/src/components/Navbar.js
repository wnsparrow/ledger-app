import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import SearchPolicies from './SearchPolicies'
import ViewChart from './ViewChart'

const NavbarComp = (props) => {
  return (
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ledger App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/home'}>View Policies</Nav.Link> 
            <Nav.Link as={Link} to={'/search'}>Search Policies</Nav.Link>
            <Nav.Link as={Link} to={'/chart'}>Chart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      <Routes>
        <Route path="/home" element={<Home data={props.data} />} />
        <Route path="/search" element={<SearchPolicies data={props.data} />} />
        <Route path="/chart" element={<ViewChart />} />
      </Routes>
    </div>
    </Router>
  )
}

export default NavbarComp