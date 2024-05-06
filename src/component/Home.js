import React from 'react'
import styled from 'styled-components'
import NumberCounter from './NumberCounter'

const JSXStyled = styled.div`
padding: 2em;
.h1{
  background-color:navy-blue;
}
`
function Home() {
  return (
    <JSXStyled>
      <NumberCounter />
    </JSXStyled>
  )
}

export default Home
