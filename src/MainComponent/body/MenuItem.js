import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onSelectedDish }) => {
  return (
    <div>
      <Card onClick={() => onSelectedDish(dish)} inverse style={{
        padding: 5,
        margin: 8,
        cursor: 'pointer'
      }}>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.5
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h3" className='text-black fw-bold'>
            {dish.name}
          </CardTitle>
          <CardTitle tag="h5" className='text-black'>
            Category: {dish.category}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem