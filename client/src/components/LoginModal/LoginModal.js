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
import { connect } from "react-redux";
import { clearErrors } from "../../action/errorAction";
import { login } from "../../action/authAction";

const LoginModal = ({
  loginModal,
  SetLoginModal,
  clearErrors,
  login,
  error,
  isAuth,
  user
}) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [toast, SetToast] = useState(false);

  const toggle = () => {
    SetLoginModal(!loginModal);
    clearErrors();
  };

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      SetToast(true);
    } else if (error.id === null && isAuth && loginModal && user) {
      SetToast(false);
      toggle();
    }
  }, [error.id, isAuth, user]);

  const onChangeEmail = e => {
    SetEmail(e.target.value);
  };

  const onChangePassword = e => {
    SetPassword(e.target.value); //Maybe not safe..
  };

  const onSubmit = e => {
    e.preventDefault();
    clearErrors();
    // Create user object
    const loginUser = {
      email,
      password
    };

    // Attempt to register
    login(loginUser);
  };

  return (
    <div>
      <Modal isOpen={loginModal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Toast isOpen={toast}>
                <ToastHeader icon="danger">Login</ToastHeader>
                <ToastBody>Login Failed:{error.msg.msg}</ToastBody>
              </Toast>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={onChangeEmail}
              />
              <Label for="password">Password:</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={onChangePassword}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isAuth: state.auth.isAuth,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal);
