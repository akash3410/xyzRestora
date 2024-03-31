import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { baseURL } from '../../redux/baseURL';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      rating: '',
      comment: '',
      nextId: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    // Fetch items from the server to determine the next ID
    axios.get(baseURL + 'comments')
      .then(response => {
        const items = response.data;
        // Determine the next ID based on the highest ID present in the data
        const nextId = (items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 0).toString();
        this.setState({ nextId });
      })
  }

  handleSubmit = event => {
    this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment, this.state.nextId);
    this.setState({
      author: '',
      rating: '',
      comment: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='author'
            value={this.state.author}
            placeholder='Your Name'
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Input
            type='select'
            name='rating'
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type='textarea'
            name='comment'
            value={this.state.comment}
            placeholder='Comment here!'
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Button type='submit'>Submit Comment</Button>
        </Form>
      </div>
    )
  }
}

export default CommentForm;