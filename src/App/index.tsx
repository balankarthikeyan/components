import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Heading = styled.h1`
  color: blue;
`
const App = () => {
  return(
    <React.Fragment>
      <Heading> {'Hello--'} </Heading>
    </React.Fragment>
  )
}

render(<App />, document.getElementById('app'))
