import React, { Component } from 'react'
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import { Button, Modal, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) => dispatch({
      type: actionTypes.ADD_COMMENT,
      payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
      }
    })
  }
}

class Menu extends Component {
  state = {
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
    const menu = this.props.dishes.map((dish) => {
      return (
        <MenuItem
          dish={dish}
          key={dish.id}
          onSelectedDish={this.onSelectedDish}
        />
      );
    })

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
      dishDetail = <DishDetails
        selectedDish={this.state.selectedDish}
        comments={comments}
        addComment={this.props.addComment}
      />
    }

    return (
      <div className='container' >
        <div className='row'>{menu}</div>
        <Modal isOpen={this.state.isModalOpen}>
          {dishDetail}
          <ModalFooter onClick={this.toogleModal}>
            <Button color='primary' onClick={this.toogleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);