import React from 'react'
import {Alert, Breadcrumb, Button, Card, Form, Container, Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className = 'App'>
      <header className = "App-header">
        <Container>  
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>      
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className='text-muted'>
                    We never share your data, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className='mb-3' controlId='formPassword'>
                  <Form.Label>Password</Form.Label>      
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='secondary' type='submit'>Submit</Button>
          </Form>

          <Card className='mb-3 mt-3' style={{color: 'black'}}>
            <Card.Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/300px-Left_side_of_Flying_Pigeon.jpg'/>
            <Card.Body>
              <Card.Title >Card Example</Card.Title>
              <Card.Text >
                This is a react bootstrap card
              </Card.Text>
              <Button varient='primary'>Read more</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item>Test 3</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant='primary'>This is a button</Alert>

          <Button>Test button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
