import React, { Component } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetails';
import { Button, Modal, ModalFooter } from 'reactstrap';

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    isModalOpen: false
  }

  onSelectedDish = (dish) => {
    return (
      this.setState({
        selectedDish: dish,
        isModalOpen: true
      })
    )
  }

  toogleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  render() {
    const menu = this.state.dishes.map((dish) => {
      return <MenuItem dish={dish} key={dish.id} onSelectedDish={this.onSelectedDish} />
    })
    const dish = this.state.selectedDish ? <DishDetails selectedDish={this.state.selectedDish} /> : null;
    return (
      <div className='container' >
        <div className='row'>{menu}</div>
        <Modal isOpen={this.state.isModalOpen} onClick={this.toogleModal}>
          {dish}
          <ModalFooter onClick={this.toogleModal}>
            <Button color='primary' onClick={this.toogleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default Menu