import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <InlineStyle />
      <StyledComponent />
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
    maxWidth: '40rem'
    }}>
      <h1>This is styled using inline styles.</h1>
  </div>
}

const StyledDiv = styled.div`
    font: 'inherit';
    cursor: 'pointer';
    color: 'green';
    background: '#c2c2c2';
    padding: '2rem';
    margin: '1rem';
    max-width: '40rem';
`

const StyledComponent = () => {
  return <StyledDiv>
    <h1>This is styled using styled components</h1>
  </StyledDiv>  
}

export default App;
