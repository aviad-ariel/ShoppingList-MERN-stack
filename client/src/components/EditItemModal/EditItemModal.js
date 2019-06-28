import React, { useState } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
//import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { addItem } from '../../action/itemActions';
import './EditItemModal.css';

const EditItemModal = ({ addItem, EditModal, SetEditModal, EditName, EditQuantity, SetEditQuantity }) => {
    
    const toggle = () => {
        SetEditModal(!EditModal);
    };

    const onChangeQuantity = (e) => {
        SetEditQuantity(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: EditName,
            quantity: EditQuantity
        }

        addItem(newItem);

        toggle();
    };
    return(
        <div>
            <Modal isOpen={EditModal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>
                    Edit Item
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Label style={{textAlign: "center"}} for="item">
                                    {EditName}
                                </Label>
                            </div>
                            <br></br>
                            <Input 
                                defaultValue={EditQuantity}
                                type="text" 
                                name="Quantity" 
                                id="item" 
                                onChange={onChangeQuantity}
                                />
                            <Button color="dark" style={{marginTop: '2rem'}} block>
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
};



const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(EditItemModal);