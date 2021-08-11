import React from 'react'
import styled from 'styled-components'
import './style.css'
import myStyle from './style.module.css'

function App() {
  return (
    <div>
      <InlineStyle />
      <StyledComponent />
      <VanillaCss />
      <CssModule />
    </div>
  );
}

const InlineStyle = () => {
  return <div style= {{
    font: 'inherit',
    cursor: 'pointer',
    color: 'green',
    background: '#c2c2c2',
    padding: '2rem',
    margin: '1rem',
    maxWidth: '40rem',
    border: '1px solid blue',
    borderRadius: '25px'
    }}>
      <h1>This is styled using inline styles.</h1>
  </div>
}

const StyledDiv = styled.div`
    font: inherit;
    cursor: pointer;
    color: red;
    background: #c2c2c2;
    padding: 2rem;
    margin: 1rem;
    max-width: 40rem;
    border: 1px solid blue;
    border-radius: 25px;

    :hover, :active {
      background: lightblue;
      color: blue;
      border-color: black;
    }
  `

const StyledComponent = () => {
  return <StyledDiv>
    <h1>This is styled using styled components</h1>
  </StyledDiv>  
}

const VanillaCss = () => {
  return <div className='myHeader'>
    <h1>This is styled using vanilla css</h1>
  </div>
}

const CssModule = () => {
  return <div className={myStyle.myHeader}>
    <h1>This is styled using css modules</h1>
  </div>
}


export default App;
