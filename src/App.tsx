import { ReactNode } from 'react'
import { useForm, useWatch, Control } from 'react-hook-form'
import { defaultSpacing, Base, Center, FormControl, Heading, Input, defaultBreakpoint } from 'smarthr-ui'
import styled from 'styled-components'

import { numeronymize } from './func'

interface FormInputs {
  word: string
}

const ResultForm: React.FC<{ control: Control<FormInputs> }> = ({ control }): ReactNode => {
  const word = useWatch({
    control,
    name: 'word',
  })

  return <div>{numeronymize(word)}</div>
}

const App: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues: { word: '' }, mode: 'onChange' })

  return (
    <Center>
      <Heading type="screenTitle">Numeronym Generator</Heading>
      <StyledBase padding="S">
        <FormControl
          title="Enter the word you want to represent with a numeronym."
          helpMessage="alphanumeric characters and spaces only"
          errorMessages={errors.word && 'Non-alphanumeric characters have been entered.'}
        >
          <Input
            type="text"
            {...register('word', {
              pattern: /^[a-zA-Z0-9\s]*$/,
            })}
          />
        </FormControl>
      </StyledBase>
      <StyledBase padding="S">{!errors.word && <ResultForm control={control} />}</StyledBase>
    </Center>
  )
}

export default App

const StyledBase = styled(Base)`
  margin-top: ${defaultSpacing.S};
  width: 600px;

  @media screen and (max-width: ${defaultBreakpoint.SP}px) {
    width: auto;
  }
`
