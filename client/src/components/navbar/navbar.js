import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from "reactstrap";
import RegModal from "../RegModal/RegModal";
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, SetModal] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    SetModal(!isOpen);
  };

  const onClickLogin = () => {
    toggleModal();
  };
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <RegModal modal={modal} SetModal={SetModal} />
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ marginRight: "5px" }} href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onClickLogin} href="#">
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
