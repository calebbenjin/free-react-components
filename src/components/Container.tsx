import React from 'react'
import styled from 'styled-components'

interface ContainerTypes {
  children: React.ReactElement
}

const Container = ({ children }: ContainerTypes) => {
  return <Div>{children}</Div>
}

const Div = styled('div')`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 900) {
    width: 90%;
    margin: 0 auto;
  }
`

export default Container
