import { Input, InputWrapper } from './style'

interface InputProps {
  name: string
  type: string
  placeholder: string
  spellCheck?: boolean
  strength?: string
  value: string
  onChange: (event: any) => void
}

const InputField = ({
  name,
  type,
  onChange,
  strength,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        {...props}
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === 'password' && (
        <>
          {strength && (
            <div>
              <div className={`bars ${strength}`}>
                <div></div>
              </div>
              <div className='strength'>
                {strength && <>{strength} password</>}
              </div>
            </div>
          )}
        </>
      )}
    </InputWrapper>
  )
}

export default InputField
