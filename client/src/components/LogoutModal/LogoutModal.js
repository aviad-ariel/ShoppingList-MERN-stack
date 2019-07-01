import React, { useState, useEffect } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Toast,
    ToastBody,
    ToastHeader
  } from "reactstrap";
import { logout } from '../../action/authAction'
import { connect } from "react-redux";
import { clearErrors } from "../../action/errorAction";

const LogoutModal = ({logoutModal, SetLogoutModal, logout, error, isAuth}) => {

    const toggle = () => {
        SetLogoutModal(!logoutModal);
    };

    const onLogout = () => {
        logout();
        localStorage.clear();
        toggle();
    }
    return (
        <div>
        <Modal size="sm" isOpen={logoutModal} toggle={toggle} centered>
          <ModalHeader toggle={toggle} style={{}}>Shopping List</ModalHeader>
          <ModalBody> 
              <Toast>
                  <ToastHeader icon="danger">
                    Logout
                  </ToastHeader>
                  <ToastBody>
                    Are You Sure?!
                  </ToastBody>
              </Toast>
                <Button onClick={onLogout}color="dark" >
                    Logout
                </Button>
                <Button onClick={toggle} className="ml-3" color="dark" >
                    Cancel
                </Button>
          </ModalBody>
        </Modal>
      </div>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    isAuth: state.auth.isAuth,
  });
  
  export default connect(
    mapStateToProps,
    { logout, clearErrors }
  )(LogoutModal);