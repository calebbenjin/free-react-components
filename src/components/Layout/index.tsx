import React from 'react'
import { LayoutWrapper, LeftSide, RightSide, Heading, Text } from './styles'
import Logo from '../Logo'

interface LayoutProps {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <LeftSide>
        <Logo />
        <Heading>
          Implement user <span>onboarding</span> expreriences with just a few
          clicks
        </Heading>
        <Text>
          Guide your customer on a fantastic journey within your web app.
        </Text>
      </LeftSide>
      <RightSide>{children}</RightSide>
    </LayoutWrapper>
  )
}

export default Layout
