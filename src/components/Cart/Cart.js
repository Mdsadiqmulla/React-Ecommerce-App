import React, { Fragment, useContext, useState } from 'react';import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import cartContext from '../contrext-store/contextAPI';
import './Cart.css';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';

function Cart() {
  const [show, setShow] = useState(false);
  const ctx=useContext(cartContext)

  const cartElements = [

    {

    title: 'Colors',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    quantity: 2,

    },

    {

    title: 'Black and white Colors',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    quantity: 3,

    },

    {

    title: 'Yellow and Black Colors',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    quantity: 1,

    }

    ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='cart-container'>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        
      <Modal.Header closeButton>
          <Modal.Title className='cart-modal-title'>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='cart-main-div'>
            <div className='cart-sub-head-first'>
            ITEM
            </div>
            <div className='cart-sub-head-second'>

                    PRICE
                </div>
                <div className='cart-sub-head-third'>
                QUANTITY
                </div>
          </div>
        {
          ctx.items.map((item)=>(
            <div className='cart-item-div' key={item.id}>
                <div className='cart-item-first'>
                <div className='cart-item-first-img'>
                    <img src={item.imageUrl} />
                </div>
                <div className='cart-item-first-title'>
                    {item.title}
                </div>
            </div>
            <div className='cart-item-second'>
            ${item.price}
            </div>
            <div className='cart-item-third'>
            <div className='cart-item-third-qty'>
                {item.qty}
            </div>
           <Button variant='primary' className='cart-remove-btn'>Remove</Button>

        </div>

            </div>
          ))

        }



        </Modal.Body>
        <Modal.Footer>
        <div className='cart-footer'>
          <Button variant="primary" >
          PURCHASE
          </Button>
          <div className='cart-total-div'>
           Total ${ctx.totalAmount}
          </div>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;

