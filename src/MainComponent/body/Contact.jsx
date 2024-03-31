import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col, FormGroup, Input, Label, Form, Alert } from 'reactstrap';
import { baseURL } from '../../redux/baseURL';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: null,
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      alertShow: false,
      alertText: '',
      alertType: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(baseURL + 'feedback')
      .then(response => {
        const items = response.data;
        const nextId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 0;
        this.setState({ nextId });
      })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    let newItem = {
      id: this.state.nextId.toString(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      telNum: this.state.telNum,
      email: this.state.email,
      agree: this.state.agree,
      contactType: this.state.contactType,
      message: this.state.message
    }
    axios.post(baseURL + 'feedback', newItem)
      .then(response => {
        this.setState(prevState => ({
          nextId: (prevState.nextId + 1),
          firstName: '',
          lastName: '',
          telNum: '',
          email: '',
          agree: false,
          contactType: "Tel.",
          message: ''
        }));
        return response.status;
      })
      .then(status => {
        if (status === 201) {
          this.setState({
            alertShow: true,
            alertText: "Submited Successfully",
            alertType: 'success'
          });
          setTimeout(() => {
            this.setState({
              alertShow: false,
            })
          }, 3000)
        }
      })
      .catch(error => {
        this.setState({
          alertShow: true,
          alertText: "error",
          alertType: 'danger'
        });
        setTimeout(() => {
          this.setState({
            alertShow: false
          })
        }, 2000)
      })

    event.preventDefault();
  }
  render() {
    document.title = "Contact"
    return (
      <div className='container'>
        <div className="row row-content" style={{ paddingLeft: '20px', textAlign: 'left' }}>
          <div className="col-12">
            <h1>Send us your feedback</h1>
            <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
          </div>
          <div className="col-12">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor='firstName' md={2}>First Name</Label>
                <Col md={10}>
                  <Input
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastName' md={2}>Last Name</Label>
                <Col md={10}>
                  <Input
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    placeholder='Last Name'
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='telNum' md={2}>Tel Num</Label>
                <Col md={10}>
                  <Input
                    type='tel'
                    name='telNum'
                    value={this.state.telNum}
                    placeholder='Tel Num'
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md={2}>Email</Label>
                <Col md={10}>
                  <Input
                    type='email'
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type='checkbox'
                        name='agree'
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      /> <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type='select'
                    name='contactType'
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='message' md={2}>Message</Label>
                <Col md={10}>
                  <Input
                    type='textarea'
                    name='message'
                    value={this.state.message}
                    rows="10"
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type='submit' color='primary'>
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact