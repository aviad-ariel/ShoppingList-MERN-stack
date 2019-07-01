import React, { useState, useEffect } from "react";
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
import LoginModal from "../LoginModal/LoginModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import { connect } from "react-redux";

const NavigationBar = (isAuth) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, SetModal] = useState(false);
  const [loginModal, SetLoginModal] = useState(false);
  const [logoutModal, SetLogoutModal] = useState(false);

  const auth = () => {
    if(isAuth.isAuth){
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={toggleLogoutModal} href="#">
              Logout
            </NavLink>
          </NavItem>
        </Nav>
        )
    }
    else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink  onClick={toggleLoginModal} style={{ marginRight: "5px" }} href="#">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={toggleModal} href="#">
            Register
          </NavLink>
        </NavItem>
      </Nav>
        )
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    SetModal(!modal);
  };

  const toggleLoginModal = () => {
    SetLoginModal(!loginModal);
  };

  const toggleLogoutModal = () => {
    SetLogoutModal(!logoutModal);
  };


  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <LogoutModal logoutModal={logoutModal} SetLogoutModal={SetLogoutModal} />
          <LoginModal loginModal={loginModal} SetLoginModal={SetLoginModal}/>
          <RegModal modal={modal} SetModal={SetModal} />
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              {auth()}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(NavigationBar);
