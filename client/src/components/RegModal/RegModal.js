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
import { register } from "../../action/authAction";
import { clearErrors } from "../../action/errorAction";

const RegModal = ({ modal, SetModal, clearErrors, register, error }) => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [toast, SetToast] = useState(false);
  const toggle = () => {
    SetModal(!modal);
    clearErrors();
  };

  const toggleToast = () => {
    SetToast(!toast);
  };

  useEffect(() => {
      if(error.id === "REGISTER_FAIL"){
        toggleToast();
      }
      else if(error.id === null){
        toggle();
        }
    }, [error.id]);

  const onChangeName = e => {
    SetName(e.target.value);
  };

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
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to register
    const reg = async() => {
        await register(newUser);
    };
    
    (async () => {
        await reg()
    })()
    
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Register!</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
            <Toast isOpen={toast}>
                <ToastHeader icon="danger">
                    Register
                </ToastHeader>
                <ToastBody>
                    Register Failed:{error.msg.msg}
                </ToastBody>
            </Toast>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="mb-3"
                onChange={onChangeName}
              />
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
                Register
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
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegModal);
