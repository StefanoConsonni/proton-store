import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import React from "react";

function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Proton Store</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
