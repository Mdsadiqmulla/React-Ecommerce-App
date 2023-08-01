import React, { Fragment, useContext } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cartContext from '../../contrext-store/contextAPI';
import './Store.css'

const Store = (props) => {
  const ctx = useContext(cartContext);
  const productsArr = [

    {

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ];

  const addToCartHandler = (title, price, img, i) => {
    ctx.addToCart({
      title: title,
      price: price,
      imageUrl: img,
      id: i,
      qty: 1
    })
    console.log('ctx', ctx, title, price, i);
  };

  return (
    <Fragment>
      <div className='store-main-div'>
        <div className='store-heading'>
          Music
        </div>
        <div className='store-card'>


          <Row xs={1} md={2} className="g-4">
            {productsArr.map((item, idx) => (
             
              <Col className='store-cards-row' key={idx + Math.random()}>

                {/* <div className='store-card-div'> */}
                <Card.Title className='store-card-title'>{item.title}</Card.Title>
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    {/* <Card.Title>Card title</Card.Title> */}
                    <Card.Text className='store-card-description'>
                      <div>${item.price}</div>
                      <div>
                        <Button variant="primary" onClick={addToCartHandler.bind(null, item.title, item.price, item.imageUrl, idx)}>ADD TO CART</Button>

                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* </div> */}

              </Col>
            ))}
          </Row>


        </div>
      </div>
    </Fragment>
  )
}

export default Store