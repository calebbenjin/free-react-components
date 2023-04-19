import React from 'react'
import styled from 'styled-components'
import { GiAbstract030 } from 'react-icons/gi'

const Logo = () => {
  return (
    <Div>
      <GiAbstract030 className='badge' />
      <LogoText>Easeplan</LogoText>
    </Div>
  )
}

const Div = styled('div')`
  display: flex;
  align-items: center;

  .badge {
    color: #fff;
    font-size: 2rem;
  }
`

const LogoText = styled('h4')`
  color: #fff;
  font-size: 1.5rem;
`

export default Logo
