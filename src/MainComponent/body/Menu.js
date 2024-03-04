import React, { Component } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/comments';
import DishDetails from './DishDetails';
import { Button, Modal, ModalFooter } from 'reactstrap';

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
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
    document.title = "Menu"
    const menu = this.state.dishes.map((dish) => {
      return (
        <MenuItem
          dish={dish}
          key={dish.id}
          onSelectedDish={this.onSelectedDish}
        />
      );
    })

    // const comments = this.state.selectedDish ? this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id) : null;

    // const dish = this.state.selectedDish ? <DishDetails selectedDish={this.state.selectedDish} comments={comments} /> : null;

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
      dishDetail = <DishDetails selectedDish={this.state.selectedDish} comments={comments} />
    }

    return (
      <div className='container' >
        <div className='row'>{menu}</div>
        <Modal isOpen={this.state.isModalOpen} onClick={this.toogleModal}>
          {dishDetail}
          <ModalFooter onClick={this.toogleModal}>
            <Button color='primary' onClick={this.toogleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default Menu