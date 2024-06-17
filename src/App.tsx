import { ReactNode } from 'react'
import { useForm, useWatch, Control } from 'react-hook-form'
import {
  defaultSpacing,
  Base,
  Center,
  FaArrowDownIcon,
  FaXmarkIcon,
  FormControl,
  Heading,
  Input,
  Text,
  defaultBreakpoint,
} from 'smarthr-ui'
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

  return (
    <>
      <Heading type="blockTitle" aria-hidden>
        Numeronym:
      </Heading>
      <ResultFormBody>
        <Text weight="bold">{numeronymize(word)}</Text>
      </ResultFormBody>
    </>
  )
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
          helpMessage="alphabetic characters and spaces only"
          errorMessages={errors.word && 'Non-alphabetic characters have been entered.'}
        >
          <Input
            type="text"
            {...register('word', {
              pattern: /^[a-zA-Z\s]*$/,
            })}
          />
        </FormControl>
      </StyledBase>
      <ProcessFlowArrowIcon alt="Numeronymized text shown below" />
      {errors.word ? (
        <NumeronymizeErrorIcon text="Unable to convert due to an error." color="DANGER" />
      ) : (
        <StyledBase padding="S">
          <ResultForm control={control} />
        </StyledBase>
      )}
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

const ProcessFlowArrowIcon = styled(FaArrowDownIcon)`
  margin-top: ${defaultSpacing.S};
`

const NumeronymizeErrorIcon = styled(FaXmarkIcon)`
  margin-top: ${defaultSpacing.S};
`

const ResultFormBody = styled.div`
  padding: ${defaultSpacing.XS};
`
