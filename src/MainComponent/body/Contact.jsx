import React, { Component } from 'react';
import { Button, Col, FormGroup, Input, Label, Form } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    document.title = "Contact"
    return (
      <div className='container'>
        <div className="row row-content">
          <div className="col-12">
            <h1>Send us your feedback</h1>
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
                    onChange={this.handleInputChange}>
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
                    onChange={this.handleInputChange}
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