import React, { Component } from 'react'
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import { Alert, Button, Modal, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Loading from './Loading';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment, nextId) => dispatch(addComment(dishId, rating, author, comment, nextId)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments())
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

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }

  render() {
    console.log("Menu :", this.props);
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return (
        <Loading />
      )
    }
    else if (this.props.dishes.errMess != null) {
      return (
        <Alert color='danger'>{this.props.dishes.errMess}</Alert>
      )
    }
    else {
      const menu = this.props.dishes.dishes.map((dish) => {
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
        const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
        dishDetail = <DishDetails
          selectedDish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
          commentIsLoading={this.props.comments.isLoading}
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);