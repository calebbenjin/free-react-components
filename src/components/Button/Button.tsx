import React from 'react'
import { ButtonStyle } from './style'

interface ButtonProps {
  children: React.ReactElement | React.ReactNode
}
const Button = ({ children }: ButtonProps) => {
  return <ButtonStyle>{children}</ButtonStyle>
}

export default Button
