import * as React from 'react'
import { render } from 'react-dom'

const App = () => {
  return(
    <React.Fragment>
      <h1> {'Hello'} </h1>
    </React.Fragment>
  )
}

render(<App />, document.getElementById('app'))
