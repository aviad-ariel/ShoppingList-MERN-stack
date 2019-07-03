import React, { useState, useEffect } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Alert
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ItemModal from "../ItemModal/ItemModal";
import "./ShoppingList.css";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../action/itemActions";
import EditItemModal from "../EditItemModal//EditItemModal";
import PropsTypes from "prop-types";
import MediaQuery from "react-responsive";
import { loadUser } from "../../action/authAction";

const ShoppingList = ({
  getItems,
  item,
  deleteItem,
  user,
  isAuth,
  loadUser
}) => {
  const [modal, SetModal] = useState(false);
  const [EditName, SetEditName] = useState("");
  const [EditQuantity, SetEditQuantity] = useState(1);
  const [EditModal, SetEditModal] = useState(false);
  const toggle = () => {
    SetModal(!modal);
  };

  const toggleEdit = () => {
    SetEditModal(!EditModal);
  };

  useEffect(() => {
    if (isAuth) {
      loadUser();
    }
  }, [isAuth]);

  useEffect(() => {
    if (user) {
      getItems(user._id);
    }
  }, [user]);

  const auth = () => {
    if (isAuth) {
      return (
        <Container>
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={toggle}
          >
            Add Item
          </Button>
          <EditItemModal
            EditModal={EditModal}
            SetEditModal={SetEditModal}
            EditName={EditName}
            EditQuantity={EditQuantity}
            SetEditQuantity={SetEditQuantity}
          />
          <ItemModal modal={modal} SetModal={SetModal} />
          <ListGroup>
            <MediaQuery maxDeviceWidth={550}>
              {matches => {
                if (matches) {
                  return (
                    <TransitionGroup className="shopping-list">
                      {item.items.map(({ _id, name, quantity, date }) => (
                        <CSSTransition
                          key={_id}
                          timeout={500}
                          classNames="fade"
                        >
                          <ListGroupItem>
                            <Row>
                              <Col xs="1">
                                <Button
                                  style={{ marginTop: "1.8rem" }}
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={() => {
                                    deleteItem(user._id, name);
                                    getItems(user._id);
                                  }}
                                >
                                  &times;
                                </Button>
                              </Col>
                              <Col style={{ marginTop: "2rem" }} xs="4">
                                {name}
                              </Col>
                              <Col
                                style={{
                                  marginTop: "0.2rem",
                                  textAlign: "center"
                                }}
                                xs="2"
                              >
                                {"Last Update: " +
                                  new Date(date).toLocaleString()}
                              </Col>
                              <Col
                                style={{
                                  marginTop: "2rem",
                                  paddingLeft: "4rem"
                                }}
                                xs="3"
                              >
                                <Button
                                  color="link"
                                  size="sm"
                                  onClick={() => {
                                    SetEditName(name);
                                    SetEditQuantity(quantity);
                                    deleteItem(user._id, name);
                                    getItems(user._id);
                                    toggleEdit();
                                  }}
                                >
                                  {quantity}
                                </Button>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                  );
                } else {
                  return (
                    <TransitionGroup className="shopping-list">
                      {item.items.map(({ _id, name, quantity, date }) => (
                        <CSSTransition
                          key={_id}
                          timeout={500}
                          classNames="fade"
                        >
                          <ListGroupItem>
                            <Row>
                              <Col xs="1">
                                <Button
                                  style={{}}
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={() => {
                                    deleteItem(user._id, name);
                                    getItems(user._id);
                                  }}
                                >
                                  &times;
                                </Button>
                              </Col>
                              <Col style={{ marginTop: "0.2rem" }} xs="3">
                                {name}
                              </Col>
                              <Col
                                style={{
                                  marginTop: "0.2rem",
                                  textAlign: "center"
                                }}
                                xs="6"
                              >
                                {"Last Update: " +
                                  new Date(date).toLocaleString()}
                              </Col>
                              <Col xs="2">
                                <Button
                                  color="link"
                                  size="sm"
                                  onClick={() => {
                                    SetEditName(name);
                                    SetEditQuantity(quantity);
                                    deleteItem(user._id, name);
                                    getItems(user._id);
                                    toggleEdit();
                                  }}
                                >
                                  {quantity}
                                </Button>
                              </Col>
                            </Row>
                          </ListGroupItem>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                  );
                }
              }}
            </MediaQuery>
          </ListGroup>
        </Container>
      );
    } else {
      return (
        <Alert style={{ textAlign: "center" }} color="danger">
          Please Login/Register To Start!
        </Alert>
      );
    }
  };

  return auth();
};

ShoppingList.PropsTypes = {
  getItems: PropsTypes.func.isRequired,
  item: PropsTypes.object.isRequired
};
const maoStateToProps = state => ({
  item: state.item,
  isAuth: state.auth.isAuth,
  user: state.auth.user
});

export default connect(
  maoStateToProps,
  { getItems, deleteItem, loadUser }
)(ShoppingList);
