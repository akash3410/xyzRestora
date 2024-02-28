import React, { useState } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetails';

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onSelectedDish = (dish) => {
    return setSelectedDish(dish);
  }
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} onSelectedDish={onSelectedDish} />
  })
  const dish = selectedDish ? <DishDetails selectedDish={selectedDish} /> : null;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
          {menu}
        </div>
        <div className='col-md-7'>
          {dish}
        </div>
      </div>
    </div>
  )
}

export default Menu