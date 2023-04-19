import { useState } from 'react'
import { Section, Title, FormWrapper, BackButton, FormControl } from './style'
import Container from '../Container'
import { TbArrowBackUp } from 'react-icons/tb'
import Label from '../Label/Index'
import InputField from '../InputField'
import Button from '../Button/Button'


const strengthLables = [`weak`, `medium`, `strong`]

const SignupForm = () => {
  const [strength, setStrength] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // This function accept the password parameter
  const getPasswordStrength = (password: string) => {
    let strengthIndicators: number = -1,
      upper = false,
      lower = false,
      numbers = false

    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index)
      if (!upper && char >= 65 && char < 90) {
        upper = true
        strengthIndicators++
      }
      if (!numbers && char >= 48 && char < 57) {
        numbers = true
        strengthIndicators++
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true
        strengthIndicators++
      }
    }

    return setStrength(strengthLables[strengthIndicators])
  }

  const handleChange = (event: { target: { value: string; name: string } }) => {
    setPassword(event?.target?.value)
    if (event?.target?.name) {
      getPasswordStrength(event?.target?.value)
    }
  }

  const handleEmailChange = (event: {
    target: { value: string; name: string }
  }) => {
    setEmail(event?.target?.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({'email': email, 'password': password})
  }
  return (
    <Section>
      <Container>
        <FormWrapper>
          {/* <BackButton>
            <TbArrowBackUp />
          </BackButton> */}
          <Title>Get Started</Title>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Label htmlFor='email' text='Email' />
              <InputField
                onChange={handleEmailChange}
                name='email'
                value={email}
                placeholder='Example@gmail.com'
                type='email'
              />
            </FormControl>
            <FormControl>
              <Label htmlFor='name' text='Name' />
              <InputField
                onChange={handleChange}
                strength={strength}
                name='password'
                value={password}
                placeholder='Password'
                type='password'
              />
            </FormControl>
            <FormControl>
              <Button>Create Account</Button>
            </FormControl>
          </form>
        </FormWrapper>
      </Container>
    </Section>
  )
}

export default SignupForm
