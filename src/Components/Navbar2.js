import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Navbar2() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Money Tracker</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			</Container>
		</Navbar>
	);
}

export default Navbar2;
