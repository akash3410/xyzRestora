import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onSelectedDish }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card onClick={() => onSelectedDish(dish)} inverse className='cardItem'>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 200,
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