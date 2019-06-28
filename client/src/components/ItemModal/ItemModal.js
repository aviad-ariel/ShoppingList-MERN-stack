import React, { useState } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../action/itemActions';

const ItemModal = ({ addItem, modal, SetModal }) => {
    const [NewName, SetNewName] = useState('');
    const [NewQuantity, SetNewQuantity] = useState(1);

    const toggle = () => {
        SetModal(!modal);
    };

    const onChangeName = (e) => {
        SetNewName(e.target.value) 
    };

    const onChangeQuantity = (e) => {
        SetNewQuantity(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: NewName,
            quantity: NewQuantity
        }

        addItem(newItem);

        toggle();
    };
    return(
        <div>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>
                    Add To List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">
                                Item Name
                            </Label>
                            <Input 
                                type="text" 
                                name="name" 
                                id="item" 
                                placeholder="Set Item Name"
                                onChange={onChangeName}
                                />
                            <Label for="item">
                                Quantity
                            </Label>
                            <Input 
                                type="text" 
                                name="Quantity" 
                                id="quantity" 
                                placeholder="Set Quantity"
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

export default connect(mapStateToProps, { addItem })(ItemModal);