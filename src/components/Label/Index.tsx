import React from 'react'
import { LabelStyle } from './style'

interface LabelProps {
  text: string
  htmlFor: string
}

const Label = ({ text, htmlFor }: LabelProps) => {
  return <LabelStyle htmlFor={htmlFor}>{text}</LabelStyle>
}

export default Label
