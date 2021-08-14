import React from 'react'

import './style.css'

import {Alert, Breadcrumb, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className = 'container'>
      <header>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      </header>
      <Alert variant='success'>My Alert</Alert>
      <Button className='btn'>Test button</Button>
    </div>
  );
}

export default App;
