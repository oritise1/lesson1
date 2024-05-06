import React, {useState} from 'react'
import styled from 'styled-components'

const NumberCounter = () => {
    const [counter, setcounter] = useState(0)

    const DivStyle = styled.div`
    text-align: center;
    `
    const ButtonStyle = styled.button`
    margin: 0.5em;
    `
    const IncrementCount= () => {setcounter(counter+1)}
    const DecrementCount= () => {setcounter(counter-1)}
  return (
    <DivStyle>
        <h1> {counter} </h1>
      <ButtonStyle onClick={DecrementCount}>
        Subtract
      </ButtonStyle>
      <ButtonStyle onClick={IncrementCount}>
        Add
      </ButtonStyle>
    </DivStyle>
  )
}

export default NumberCounter
